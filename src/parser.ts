import { dataMatchHeaders } from './data-match';
import { 
    ISubfile,
    IDocument
} from './interfaces';

export class AAMVA {
    static raw(rawDocument: string): IDocument {
        const headerLenght = 21;
        const separator = rawDocument.charAt(1);
        const terminator = rawDocument.charAt(3);
        const fileType = rawDocument.substring(4, 9).replace(' ', '');
        const iin = rawDocument.substring(9, 15);
        const version = parseInt(rawDocument.substring(15, 17), 10);
        const jurisdictionVersion = parseInt(rawDocument.substring(17, 19), 10);
        const numberOfEntries = parseInt(rawDocument.substring(19, 21), 10);

        const document: IDocument = {
            header: {
                separator,
                terminator,
                fileType,
                iin,
                version,
                jurisdictionVersion,
                numberOfEntries,
            },
            subfiles: [],
            data: {}
        };

        let subfileOffset = 0;
        let subfuleLength = 0;
        let subfileData: string[];
        let dataHeader = '';

        for (let i = 0; i < numberOfEntries; i++) {
            subfileOffset = parseInt(rawDocument.substring(headerLenght + i * 10 + 2, headerLenght + i * 10 + 6));
            subfuleLength = parseInt(rawDocument.substring(headerLenght + i * 10 + 6, headerLenght + i * 10 + 10));

            if (!subfileOffset) {
                if (i === 0) {
                    subfileOffset = headerLenght + numberOfEntries * 10;
                }
                else {
                    subfileOffset = document.subfiles[document.subfiles.length - 1].offset + document.subfiles[document.subfiles.length - 1].length;
                }
            }

            subfileData = rawDocument
            .substring(subfileOffset + separator.length + terminator.length, subfileOffset + subfuleLength - terminator.length)
            .replace(separator + terminator, '')
            .split(separator)
            .filter(field => field.length);

            document.subfiles.push({
                type: rawDocument.substring(headerLenght + i * 10, headerLenght + i * 10 + 2),
                offset: subfileOffset,
                length: subfuleLength,
                data: subfileData
            });

            subfileData.forEach(subfileDataField => {
                dataHeader = subfileDataField.substring(0, 3);

                if (dataMatchHeaders[dataHeader]) {
                    document.data[dataMatchHeaders[dataHeader].name] = subfileDataField.substring(3);
                    
                    if (dataMatchHeaders[dataHeader].converters?.length) {
                        dataMatchHeaders[dataHeader].converters.forEach(converter => {
                            document.data[dataMatchHeaders[dataHeader].name] = converter(document.data[dataMatchHeaders[dataHeader].name]);
                        });
                    }
                }
            });
        }

        return document;
    }

    static base64(base64Document: string): IDocument {
        return AAMVA.raw(Buffer.from(base64Document, 'base64').toString());
    }
}
import { dataMatchHeaders } from './data-match';
import { 
    ISubfile,
    IDocument
} from './interfaces';

export class AAMVA {
    static raw(rawDocument: string): IDocument {
        const separator = rawDocument.charAt(1);
        const terminator = rawDocument.charAt(3);
        const fileType = rawDocument.substring(4, 9).replace(' ', '');
        const iin = rawDocument.substring(9, 15);
        const version = parseInt(rawDocument.substring(15, 17), 10);
        const jurisdictionVersion = parseInt(rawDocument.substring(17, 19), 10);
        const numberOfEntries = parseInt(rawDocument.substring(19, 21), 10);

        const subfiles: ISubfile[] = [{
            type: rawDocument.substring(21, 23),
            offset: parseInt(rawDocument.substring(23, 27)),
            length: parseInt(rawDocument.substring(27, 31)),
            data: []
        }];
        let currentOffset = 31;

        while (currentOffset < subfiles[0].offset) {
            subfiles.push({
                type: rawDocument.substring(currentOffset, currentOffset + 2),
                offset: parseInt(rawDocument.substring(currentOffset + 2, currentOffset + 6)),
                length: parseInt(rawDocument.substring(currentOffset + 6, currentOffset + 10)),
                data: []
            });
            currentOffset += 10;
        }

        subfiles.forEach(sh => {
            sh.data = rawDocument
            .substring(sh.offset + 2, sh.offset + sh.length)
            .replace(separator + terminator, '')
            .split(separator)
            .filter(d => d.length);
        });

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
            subfiles,
            data: {}
        };

        let dataHeader = '';

        subfiles.forEach(subfile => {
            subfile.data.forEach(subfileDataField => {
                dataHeader = subfileDataField.substring(0, 3);

                if (dataMatchHeaders[dataHeader]) {
                    if (dataMatchHeaders[dataHeader].converter) {
                        document.data[dataMatchHeaders[dataHeader].name] = dataMatchHeaders[dataHeader].converter(subfileDataField.substring(3));
                    }
                    else {
                        document.data[dataMatchHeaders[dataHeader].name] = subfileDataField.substring(3);
                    }
                }
            });
        });

        return document;
    }

    static base64(base64Document: string): IDocument {
        return AAMVA.raw(Buffer.from(base64Document, 'base64').toString());
    }
}
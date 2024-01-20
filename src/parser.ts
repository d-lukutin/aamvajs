import { dataMatchHeaders } from './data-match';
import {
    IOptions,
    IDocument,
    IDocumentSubfile,
    IDocumentData
} from './interfaces';

export class AAMVA {
    static raw(rawDocument: string, options: IOptions = {}): IDocument {
        let headerLenght = 21;
        const separator = rawDocument.charAt(1);
        const terminator = rawDocument.charAt(3);
        const fileType = rawDocument.substring(4, 9).replace(' ', '');
        const iin = rawDocument.substring(9, 15);
        const version = parseInt(rawDocument.substring(15, 17), 10);
        const jurisdictionVersion = parseInt(rawDocument.substring(17, 19), 10);
        let numberOfEntries = parseInt(rawDocument.substring(19, 21), 10);

        if (!numberOfEntries) {
            numberOfEntries = parseInt(rawDocument.substring(17, 19), 10);
            headerLenght -= 2;
        }

        let subfileOffset = 0;
        let subfuleLength = 0;
        let subfileData: string[];
        let dataHeaderId = '';
        const subfiles: IDocumentSubfile[] = [];
        const data: IDocumentData = {
            localFields: {}
        };

        for (let i = 0; i < numberOfEntries; i++) {
            subfileOffset = parseInt(rawDocument.substring(headerLenght + i * 10 + 2, headerLenght + i * 10 + 6));
            subfuleLength = parseInt(rawDocument.substring(headerLenght + i * 10 + 6, headerLenght + i * 10 + 10));

            if (!subfileOffset) {
                if (i === 0) {
                    subfileOffset = headerLenght + numberOfEntries * 10;
                }
                else {
                    subfileOffset = subfiles[subfiles.length - 1].offset + subfiles[subfiles.length - 1].length;
                }
            }

            subfileData = rawDocument
            .substring(subfileOffset + separator.length + terminator.length, subfileOffset + subfuleLength - terminator.length)
            .replace(separator + terminator, '')
            .split(separator)
            .filter(field => field.length);

            subfiles.push({
                type: rawDocument.substring(headerLenght + i * 10, headerLenght + i * 10 + 2),
                offset: subfileOffset,
                length: subfuleLength,
                data: subfileData
            });

            let fieldData: string = '';

            subfileData.forEach(subfileDataField => {
                dataHeaderId = subfileDataField.substring(0, 3);

                const allHeaders = dataMatchHeaders.filter(header => header.id === dataHeaderId);

                if (allHeaders.length) {
                    let fieldHeader = allHeaders.find(header => header.version === version);

                    if (!fieldHeader) fieldHeader = allHeaders.find(header => !header.version);

                    if (fieldHeader) {
                        fieldData = fieldHeader.converters.reduce((acc, converter) => converter(acc), subfileDataField.substring(3));

                        if (dataHeaderId.charAt(0) === 'Z') {
                            if (!(fieldHeader.state && data.state && fieldHeader.state !== data.state)) {
                                if (!data.localFields[fieldHeader.name]) {
                                    data.localFields[fieldHeader.name] = fieldData;
                                }
                            }
                        }
                        else {
                            data[fieldHeader.name] = fieldData;
                        }
                    }
                }
            });
        }

        if (options.clearNoneValue) {
            for (let field in data) {
                if (field !== 'localFields') {
                    if (data[field].toUpperCase() === 'NONE') {
                        data[field] = '';
                    }
                }
            }
            for (let field in data.localFields) {
                if (data.localFields[field].toUpperCase() === 'NONE') {
                    data.localFields[field] = '';
                }
            }
        }

        if (options.removeEmptyFields) {
            for (let field in data) {
                if (data[field] === '') {
                    delete data[field];
                }
            }
            for (let field in data.localFields) {
                if (data.localFields[field] === '') {
                    delete data.localFields[field];
                }
            }
        }

        const document: IDocument = {
            type: subfiles[0]?.type ?? '',
            header: {
                separator,
                terminator,
                fileType,
                iin,
                version,
                jurisdictionVersion,
                numberOfEntries
            },
            subfiles,
            data
        };

        return document;
    }

    static base64(base64Document: string, options: IOptions = {}): IDocument {
        return AAMVA.raw(Buffer.from(base64Document, 'base64').toString(), options);
    }
}
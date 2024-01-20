import { IDocumentSubfile } from './document-subfile.interface';
import { IDocumentData } from './document-data.interface';

export interface IDocument {
    readonly type: string;
    readonly header: {
        readonly separator: string;
        readonly terminator: string;
        readonly fileType: string;
        readonly iin: string;
        readonly version: number;
        readonly jurisdictionVersion: number;
        readonly numberOfEntries: number;
    };
    readonly subfiles: IDocumentSubfile[];
    data: IDocumentData;
}
export interface IDocumentSubfile {
    readonly type: string;
    readonly offset: number;
    readonly length: number;
    readonly data: string[];
}
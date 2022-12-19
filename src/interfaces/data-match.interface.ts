export interface IDataMatch {
    readonly [key: string]: {
        readonly name: string;
        converter?(data: string): string;
    };
}
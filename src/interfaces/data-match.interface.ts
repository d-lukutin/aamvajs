import { Converter } from './converter.type';

export interface IDataMatch {
    readonly [key: string]: {
        readonly name: string;
        readonly nameByVersion?: [{
            versions: number[];
            name: string;
        }];
        readonly isLocalField?: boolean;
        readonly converters: Converter[];
    };
}
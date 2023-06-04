import { Converter } from './converter.type';

export interface IDataMatch {
    readonly [key: string]: {
        readonly name: string;
        readonly converters?: Converter[];
    };
}
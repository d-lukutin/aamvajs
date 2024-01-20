import { Converter } from './converter.type';

export interface IDataMatchHeader {
    readonly state?: string;
    readonly id: string;
    readonly name: string;
    readonly version?: number;
    readonly converters: Converter[];
}
import { Converter } from '../interfaces';

export function splitConverter(separator: string,): Converter {
    return ((data: string) => data.split(separator));
}
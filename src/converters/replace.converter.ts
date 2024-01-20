import { Converter } from '../interfaces';

export function replaceConverter(pattern: string | RegExp, replacement: string): Converter {
    return ((data: string) => data.replace(pattern, replacement));
}
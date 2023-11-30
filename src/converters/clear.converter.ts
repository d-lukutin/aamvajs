export function clearConverter(data: string): string {
    if (!data) return data;
    if (!data.length) return data;

    while(data.length && data.charAt(data.length - 1) === ' ') {
        data = data.substring(0, data.length - 1);
    }

    if (data.charAt(data.length - 1) === ',') data = data.substring(0, data.length - 1);

    return data;
}
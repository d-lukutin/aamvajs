export function dateConverter (data: string): string {
    if (!data.length) return '';

    data = data.replace(/\D/g, '');

    if (data === '00000000') return '';
    
    const start = parseInt(data.substring(0, 2));
    if (start < 13) {
        return `${data.substring(4, 8)}-${data.substring(0, 2)}-${data.substring(2, 4)}`;
    }
    return `${data.substring(0, 4)}-${data.substring(4, 6)}-${data.substring(6, 8)}`;
}
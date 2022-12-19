export function genderConverter (data: string): string {
    if (!data) return data;
    if (!data.length) return data;

    switch (data.charAt(0)) {
        case '1':
            return 'M';
        case '2':
            return 'F';
        case '9':
            return 'NS';
        default:
            return data.charAt(0);
    }
}
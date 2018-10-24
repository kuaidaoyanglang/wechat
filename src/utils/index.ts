export function leftpad(str: string, len: number = 2, ch: string = ' ') {
    for (let i = str.length; i < len; i++) {
        str = ch + str;
    }

    return str;
}

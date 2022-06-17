export const trimBodyAtWordEnd = (str: string): string => str.substring(0, Math.min(str.length, str.lastIndexOf(' ')));

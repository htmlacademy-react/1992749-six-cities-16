export const getCapitalLetter = (item: string) => `${item[0].toUpperCase()}${item.slice(1)}`;

export const getPhrases = (item: string) => item.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');

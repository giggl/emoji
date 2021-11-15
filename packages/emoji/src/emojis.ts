import all from './emojis.json';

export type Emoji = typeof all[number];

export const emojis: Emoji[] = all;

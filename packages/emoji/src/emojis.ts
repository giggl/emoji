import all from './emojis.json';

export interface Emoji {
	name: string;
	category: string;
	unified: string;
	sheet_y: number;
	sheet_x: number;
	short_names: string[];
}

export const emojis: Emoji[] = all;

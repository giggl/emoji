import {Emoji} from './emojis';

/**
 * Function to execute when an emoji is picked
 */
export type OnPick = (emoji: Emoji) => unknown;

export type Coords = [column: number, row: number];

export interface ParsedCategory {
	/**
	 * The emojis in this category
	 */
	emojis: Emoji[];
	/**
	 * The ID of the category (for react keys)
	 */
	id: string;
	/**
	 * The name of this category
	 */
	name: string;
}

/**
 * Gets the prop types for element when passed a tag name
 */
export type PropsFor<T extends keyof JSX.IntrinsicElements> =
	JSX.IntrinsicElements[T];

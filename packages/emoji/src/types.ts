import {Emoji} from './emojis';

/**
 * Function to execute when an emoji is picked
 */
export type OnPick = (emoji: Emoji) => unknown;

export type Coords = [column: number, row: number];

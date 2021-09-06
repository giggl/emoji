/**
 * The height and width of each emoji
 */
export const EMOJI_DIMENSION = 40;
/**
 * The default amount of emojis to display
 */
export const DEFAULT_COLUMNS_COUNT = 6;
/**
 * The default amount of rows to display
 */
export const DEFAULT_ROWS_COUNT = 7;

export const CONTAINER_PADDING = 10;
export const CATEGORY_CONTAINER_HEIGHT = 24;

/**
 * Utility calculator to work out the height and width of
 * the main container for emojis
 */
export const containerBoundsCalculator = {
	padding: CONTAINER_PADDING * 2,
	width: (cols: number) => EMOJI_DIMENSION * cols,

	// Prettier removes the parens around the last expr
	// prettier-ignore
	height: (rows: number) => (EMOJI_DIMENSION / 2) + (EMOJI_DIMENSION * rows),
} as const;

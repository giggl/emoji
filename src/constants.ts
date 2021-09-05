export const EMOJI_DIMENSION = 40;
export const GRID_WIDTH = 6;
export const CONTAINER_PADDING = 10;
export const COLUMN_COUNT = 2;

export const containerBoundsCalculator = {
	padding: CONTAINER_PADDING * 2,
	width: (cols: number) => EMOJI_DIMENSION * cols,

	// Prettier removes the parens around the last expr
	// prettier-ignore
	height: (rows: number) => (EMOJI_DIMENSION / 2) + (EMOJI_DIMENSION * rows),
} as const;

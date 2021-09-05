export const EMOJI_DIMENSION = 40;
export const GRID_WIDTH = 6;
export const CONTAINER_PADDING = 10;
const COLUMN_COUNT = 7;

// Prettier removes the parens around the last expr
// prettier-ignore
export const CONTAINER_HEIGHT = EMOJI_DIMENSION + (EMOJI_DIMENSION * COLUMN_COUNT);

export const containerWidthSetting = {
	padding: CONTAINER_PADDING * 2,
	width: (cols: number) => EMOJI_DIMENSION * cols,
};

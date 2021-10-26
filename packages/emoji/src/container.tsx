import {styled, t} from './stitches';

export const SCROLLBAR_SIZE = 10;
export const columns = 8;
export const rows = 9;

export const EMOJI_SIZE = Number.parseInt(t.sizes.EMOJI_SIZE.value, 10);

export const width = columns * EMOJI_SIZE;
export const height = rows * EMOJI_SIZE;

export const Container = styled('div', {
	background: t.colors.bgPrimary,
	color: t.colors.textPrimary,
	borderRadius: t.radii.sm,
	boxShadow: `0 2px 10px ${t.colors.bgSecondary.toString()}`,
	overflow: 'auto',
	fontFamily: t.fonts.inter,
	width: 'auto',
	display: 'inline-block',
});

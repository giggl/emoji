import * as ScrollArea from '@radix-ui/react-scroll-area';
import {styled, t} from './stitches';

const SCROLLBAR_SIZE = 10;

const columns = 5;
const width = columns * Number.parseInt(t.sizes.EMOJI_SIZE.value, 10);

export const Container = styled(ScrollArea.Root, {
	width,
	background: t.colors.bgPrimary,
	color: t.colors.textPrimary,
	px: 2,
	height: t.sizes.CONTAINER_HEIGHT,
	borderRadius: t.radii.sm,
	boxShadow: `0 2px 10px ${t.colors.bgSecondary.toString()}`,
});

export const Thumb = styled(ScrollArea.Thumb, {
	'flex': 1,
	'background': t.colors.brandPrimary,
	'borderRadius': SCROLLBAR_SIZE,
	'position': 'relative',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '100%',
		height: '100%',
		minWidth: 44,
		minHeight: 44,
	},
});

export const Viewport = styled(ScrollArea.Viewport, {
	width: '100%',
	height: '100%',
	borderRadius: 'inherit',
});

export const Scrollbar = styled(ScrollArea.Scrollbar, {
	'display': 'flex',
	'userSelect': 'none',
	'touchAction': 'none',
	'padding': 2,
	'background': t.colors.textMuted,
	'transition': 'background 160ms ease-out',
	'&:hover': {background: t.colors.textTertiary},
	'&[data-orientation="vertical"]': {width: SCROLLBAR_SIZE},
	'&[data-orientation="horizontal"]': {
		flexDirection: 'column',
		height: SCROLLBAR_SIZE,
	},
});

export const Corner = styled(ScrollArea.Corner, {
	background: t.colors.black,
});

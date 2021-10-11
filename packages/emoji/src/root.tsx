import {styled, t} from './stitches';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 10;

export const Root = styled(ScrollArea.Root, {
	background: t.colors.bgPrimary,
	color: t.colors.textPrimary,
	px: 2,
	width: t.sizes.CONTAINER_WIDTH,
	height: t.sizes.CONTAINER_HEIGHT,
	borderRadius: t.radii.sm,
	boxShadow: `0 2px 10px ${t.colors.bgSecondary}`,
});

export const Thumb = styled(ScrollArea.Thumb, {
	'flex': 1,
	'background': t.colors.brandPrimary,
	'borderRadius': SCROLLBAR_SIZE,
	// increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
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
	// ensures no selection
	'userSelect': 'none',
	// disable browser handling of all panning and zooming gestures on touch devices
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

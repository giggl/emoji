import type * as Stitches from '@stitches/react';
import {createStitches} from '@stitches/react';
import {colors} from './colors';

export const {
	styled,
	css,
	theme,
	createTheme,
	getCssText,
	globalCss,
	keyframes,
	config,
} = createStitches({
	theme: {
		colors,
		gradients: {
			primary: `linear-gradient(to right, ${colors.brandSecondary}, ${colors.brandPrimary})`,
		},
		fonts: {
			untitled: 'Inter Var, Inter, -apple-system, system-ui, sans-serif',
			mono: 'JetBrains Mono, Söhne Mono, menlo, monospace',
		},
		space: {
			xxxs: '5px',
			xxs: '10px',
			xs: '15px',
			sm: '20px',
			md: '25px',
			lg: '35px',
			xl: '45px',
			xxl: '65px',
			xxxl: '80px',
		},
		sizes: {
			CONTAINER_WIDTH: '200px',
			EMOJI_SIZE: 40,
			CONTAINER_HEIGHT: '400px',
		},
		radii: {
			xs: '4px',
			sm: '6px',
			md: '8px',
			lg: '12px',
			round: '50%',
			pill: '9999px',
		},
		zIndices: {
			low: '100',
			med: '200',
			high: '300',
			sky: '400',
			max: '999',
		},
	},
	media: {
		xs: '(min-width: 520px)',
		sm: '(min-width: 900px)',
		md: '(min-width: 1200px)',
		lg: '(min-width: 1800px)',
		motion: '(prefers-reduced-motion)',
		hover: '(any-hover: hover)',
		dark: '(prefers-color-scheme: dark)',
		light: '(prefers-color-scheme: light)',
	},
	utils: {
		p: (value: Stitches.PropertyValue<'padding'>) => ({
			padding: value,
		}),

		pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
			paddingTop: value,
		}),

		pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
			paddingRight: value,
		}),

		pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
			paddingBottom: value,
		}),

		pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
			paddingLeft: value,
		}),

		px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
			paddingLeft: value,
			paddingRight: value,
		}),

		py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
			paddingTop: value,
			paddingBottom: value,
		}),

		m: (value: Stitches.PropertyValue<'margin'>) => ({
			margin: value,
		}),

		mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
			marginTop: value,
		}),

		mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
			marginRight: value,
		}),

		mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
			marginBottom: value,
		}),

		ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
			marginLeft: value,
		}),

		mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
			marginLeft: value,
			marginRight: value,
		}),

		my: (value: Stitches.PropertyValue<'marginTop'>) => ({
			marginTop: value,
			marginBottom: value,
		}),

		bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
			backgroundColor: value,
		}),

		br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
			borderRadius: value,
		}),

		us: (value: Stitches.PropertyValue<'userSelect'>) => ({
			WebkitUserSelect: value,
			userSelect: value,
		}),

		size: (value: Stitches.PropertyValue<'width'>) => ({
			width: value,
			height: value,
		}),
	},
});

export type CSS = Stitches.CSS<typeof config>;
export const t = theme;

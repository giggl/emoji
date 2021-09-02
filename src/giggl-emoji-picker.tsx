import React, {
	HTMLAttributes,
	ReactChild,
	useRef,
	createElement as h,
	useCallback,
	CSSProperties,
} from 'react';
import {styled, setup} from 'goober';
import {useVirtual} from 'react-virtual';
import emojis from './emoji.json';
import {enforceInferType} from './utils/types';

setup(h);

const defaultContainerTheme = enforceInferType<CSSProperties>()({
	background: '#161214',
	color: '#cccccc',
	width: '250px',
	height: '400px',
	borderRadius: '20px',
});

export type ContainerTheme = typeof defaultContainerTheme;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	children?: ReactChild;
	theme?: Partial<ContainerTheme>;
	onPick: (item: string) => unknown;
	debug?: boolean;
}

export const GigglEmojiPicker = (props: Props) => {
	const parentRef = useRef<HTMLDivElement | null>(null);

	const rowVirtualizer = useVirtual({
		size: emojis.length,
		parentRef,
		estimateSize: useCallback(() => 50000, []),
		overscan: 5,
	});

	const {virtualItems, ...rest} = rowVirtualizer;

	if (props.debug) {
		console.log('[GIGGL EMOJI PICKER]', rest);
	}

	return (
		<StyledContainer containerTheme={props.theme}>
			{props.debug && (
				<div style={{position: 'fixed', top: 20, left: 20, background: 'black'}}>
					{JSON.stringify(rest)}
				</div>
			)}
			<div ref={parentRef}>
				{rowVirtualizer.virtualItems.map(item => (
					<div ref={item.measureRef} key={item.index}>
						{JSON.stringify(emojis[item.index])}
					</div>
				))}
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled('div')<{containerTheme?: Partial<ContainerTheme>}>(props => ({
	...defaultContainerTheme,
	...props.containerTheme,
}));

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
import {EmojiListItem} from './types';

// Goober requires it idk
// ask goober not me i did not make goober
// guys
setup(h);

const defaultContainerTheme = enforceInferType<CSSProperties>()({
	background: '#202023',
	color: '#cccccc',
	width: '250px',
	height: '400px',
	borderRadius: '10px',
	display: 'grid',
	overflow: 'hidden',
	overflowY: 'auto',
	gridTemplateColumns: 'repeat(3, 1fr)',
	padding: '5px',
	boxSizing: 'border-box',
	fontSize: '80%',
	border: '1px solid #49494a',
});

export type ContainerTheme = typeof defaultContainerTheme;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	children?: ReactChild;
	style?: Partial<ContainerTheme>;
	onPick: (item: string) => unknown;
	debug?: boolean;
}

export const GigglEmojiPicker = (props: Props) => {
	const parentRef = useRef<HTMLDivElement | null>(null);

	const rowVirtualizer = useVirtual({
		size: emojis.length,
		parentRef,
		estimateSize: useCallback(() => 50, []),
		overscan: 200,
	});

	const {virtualItems, ...rest} = rowVirtualizer;

	if (props.debug) {
		console.log('[GIGGL EMOJI PICKER]', rest);
	}

	return (
		<StyledContainer containerTheme={props.style}>
			{props.debug && (
				<div style={{position: 'fixed', top: 20, left: 20, background: 'black'}}>
					{JSON.stringify(rest)}
				</div>
			)}
			<div ref={parentRef}>
				{rowVirtualizer.virtualItems.map(item => {
					const emoji = (emojis as EmojiListItem[])[item.index];

					return (
						<div
							ref={item.measureRef}
							key={item.index}
							style={{height: '50px', overflow: 'hidden'}}
						>
							{emoji.name}
						</div>
					);
				})}
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled('div')<{containerTheme?: Partial<ContainerTheme>}>(props => ({
	...defaultContainerTheme,
	...props.containerTheme,
}));

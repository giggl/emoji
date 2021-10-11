import React from 'react';
import {Container} from './container';

export interface OnPick {
	(emoji: string): unknown;
}

export interface EmojiProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	onPick: OnPick;
}

export function EmojiPicker(props: EmojiProps) {
	return (
		<Container>
			<button
				onClick={() => {
					props.onPick('hello worlds');
				}}
			>
				Click me!
			</button>
		</Container>
	);
}

export {getCssText} from './stitches';

import React from 'react';
import {OnPick} from './types';
import {PickerProvider} from './context';
import {Cell} from './cell';
import {emojis} from './emojis';

export interface EmojiProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	/**
	 * Picker function. Please wrap in useCallback if defined inside a component to avoid unnecessary rerenders!
	 */
	onPick: OnPick;
}

export function EmojiPicker(props: EmojiProps) {
	return (
		<PickerProvider picker={props.onPick}>
			{emojis.map((emoji, index) => {
				return <Cell key={emoji.char} index={index} emoji={emoji} />;
			})}
		</PickerProvider>
	);
}

export {getCssText} from './stitches';

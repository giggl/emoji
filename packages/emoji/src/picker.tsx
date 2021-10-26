import React, {memo} from 'react';
import {OnPick, PropsFor} from './types';
import {PickerProvider} from './context';
import {emojis} from './emojis';
import {chunk, useInput} from './util';
import {Cell} from './cell';
import {Category} from './category';
import {columns, Container, EMOJI_SIZE, height, width} from './container';
import {Search} from './search';
import {Emoji} from '.';
import {FixedSizeGrid} from 'react-window';
import {useAtomValue, useUpdateAtom} from 'jotai/utils';
import {atoms} from './state';

export interface EmojiProps extends PropsFor<'div'> {
	/**
	 * Picker function. Please wrap in useCallback if defined inside a component to avoid unnecessary rerenders!
	 */
	onPick: OnPick;
}

const chunked = chunk(emojis, columns);

const MemoList = memo(() => {
	const setCategory = useUpdateAtom(atoms.currentCategory);

	return (
		<FixedSizeGrid
			useIsScrolling
			rowCount={emojis.length / columns}
			rowHeight={EMOJI_SIZE}
			columnCount={columns}
			columnWidth={EMOJI_SIZE}
			width={width}
			height={height}
			overscanRowCount={5}
			onItemsRendered={render => {
				const lastEmoji =
					chunked[render.visibleRowStartIndex][render.visibleColumnStartIndex];

				if (!lastEmoji) {
					return;
				}

				setCategory(lastEmoji.group);
			}}
		>
			{({columnIndex, rowIndex, style}) => {
				const emoji = chunked[rowIndex][columnIndex] as Emoji | undefined;

				if (!emoji) {
					return null;
				}

				return (
					<Cell
						key={emoji.codes}
						emoji={emoji}
						style={style}
						indicies={[columnIndex, rowIndex]}
					/>
				);
			}}
		</FixedSizeGrid>
	);
});

export const EmojiPicker = (props: EmojiProps) => {
	const {onChange, state} = useInput('', value => value.toUpperCase());
	const activeCategory = useAtomValue(atoms.currentCategory);

	return (
		<PickerProvider picker={props.onPick}>
			<Container>
				<Search value={state} placeholder="🧭 Search" onChange={onChange} />
				<Category>{activeCategory}</Category>
				<MemoList />
			</Container>
		</PickerProvider>
	);
};

export {getCssText} from './stitches';

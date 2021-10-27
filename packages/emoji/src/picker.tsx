import React, {memo, useMemo} from 'react';
import {OnPick, Either} from './types';
import {PickerProvider} from './context';
import {emojis, Emoji} from './emojis';
import {chunk, useInput} from './util';
import {Cell} from './cell';
import {Category} from './category';
import {columns, Container, EMOJI_SIZE, height, width} from './container';
import {Search} from './search';
import {FixedSizeGrid} from 'react-window';
import {useAtomValue, useUpdateAtom} from 'jotai/utils';
import {atoms} from './state';

export interface EmojiProps {
	/**
	 * Picker function. Please wrap in useCallback if defined inside a component to avoid unnecessary rerenders!
	 */
	onPick: OnPick;
}

const MemoList = memo(
	(props: {search: string}) => {
		const setCategory = useUpdateAtom(atoms.currentCategory);

		const chunked = useMemo(
			() =>
				chunk(
					emojis.filter(emoji =>
						emoji.name.toLowerCase().includes(props.search.toLowerCase()),
					),
					columns,
				),
			[props.search],
		);

		if (chunked.length === 0) {
			return <div style={{width, height}}>No emojis match your search!</div>;
		}

		return (
			<FixedSizeGrid
				rowCount={emojis.length / columns}
				rowHeight={EMOJI_SIZE}
				columnCount={columns}
				columnWidth={EMOJI_SIZE}
				width={width}
				height={height}
				onItemsRendered={render => {
					const lastEmoji =
						chunked[render.visibleRowStartIndex]?.[
							render.visibleColumnStartIndex
						];

					if (!lastEmoji) {
						return;
					}

					setCategory(lastEmoji.category);
				}}
			>
				{({columnIndex, rowIndex, style}) => {
					const emoji = chunked[rowIndex]?.[columnIndex] as Either<
						Emoji,
						undefined
					>;

					if (!emoji) {
						return null;
					}

					return <Cell key={emoji.name} emoji={emoji} style={style} />;
				}}
			</FixedSizeGrid>
		);
	},
	(a, b) => a.search === b.search,
);

export const EmojiPicker = (props: EmojiProps) => {
	const {onChange, state} = useInput('', value => value.toLowerCase());
	const activeCategory = useAtomValue(atoms.currentCategory);

	return (
		<PickerProvider picker={props.onPick}>
			<Container>
				<Search value={state} placeholder="🧭 Search" onChange={onChange} />
				<Category>{activeCategory}</Category>
				<div
					onClick={e => {
						console.log(e.target);
					}}
				>
					<MemoList search={state} />
				</div>
			</Container>
		</PickerProvider>
	);
};

export {getCssText} from './stitches';

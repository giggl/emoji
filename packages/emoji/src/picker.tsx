import React, {useEffect, useMemo} from 'react';
import {Coords, Either, OnPickFn} from './types';
import {PickerProvider} from './context';
import {Emoji, emojis} from './emojis';
import {chunk, useInput} from './util';
import {Cell} from './cell';
import {Category} from './category';
import {columns, Container, EMOJI_SIZE, height, width} from './container';
import {Search} from './search';
import {FixedSizeGrid} from 'react-window';
import {useAtomValue, useUpdateAtom} from 'jotai/utils';
import {atoms} from './state';
import {DirectionHooks} from './direction';

export interface EmojiPickerProps {
	/**
	 * Picker function. Please wrap in useCallback if defined inside a component to avoid unnecessary rerenders!
	 */
	onPick: OnPickFn;
}

const MemoList = (props: {emojis: Emoji[][]}) => {
	const setCategory = useUpdateAtom(atoms.currentCategory);

	if (props.emojis.length === 0) {
		return (
			<div
				style={{
					width,
					height,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				🚫 No emojis match your search!
			</div>
		);
	}

	return (
		<FixedSizeGrid
			rowCount={Math.ceil(emojis.length / columns)}
			rowHeight={EMOJI_SIZE}
			columnCount={columns}
			columnWidth={EMOJI_SIZE}
			width={width}
			height={height}
			onItemsRendered={render => {
				const lastEmoji =
					props.emojis[render.visibleRowStartIndex]?.[
						render.visibleColumnStartIndex
					];

				if (!lastEmoji) {
					return;
				}

				setCategory(lastEmoji.category);
			}}
		>
			{({columnIndex, rowIndex, style}) => {
				const emoji = props.emojis[rowIndex]?.[columnIndex] as Either<
					Emoji,
					undefined
				>;

				if (!emoji) {
					return null;
				}

				return (
					<Cell
						key={emoji.name}
						coords={[columnIndex, rowIndex]}
						emoji={emoji}
						style={style}
					/>
				);
			}}
		</FixedSizeGrid>
	);
};

const CellFocuser = () => {
	const [x, y] = useAtomValue(atoms.location) ?? [];

	useEffect(() => {
		if (x === undefined || y === undefined) {
			return;
		}

		const attr = `data-coords="${x}:${y}"`;
		const button = document.querySelector<HTMLButtonElement>(`button[${attr}]`);

		if (button) {
			button.focus();
		}
	}, [x, y]);

	return null;
};

export const EmojiPicker = (props: EmojiPickerProps) => {
	const {onChange, state} = useInput('', value => value.toLowerCase());
	const activeCategory = useAtomValue(atoms.currentCategory);

	const chunked = useMemo(
		() =>
			chunk(
				emojis.filter(emoji => {
					const str = emoji.name.toLowerCase();

					return (
						str + emoji.short_names.join(' ').replaceAll('_', ' ')
					).includes(state.toLowerCase());
				}),
				columns,
			),
		[state],
	);

	return (
		<PickerProvider picker={props.onPick}>
			<CellFocuser />
			<DirectionHooks
				columnCount={columns}
				rowCount={Math.ceil(emojis.length / columns)}
			/>

			<Container>
				<Search value={state} placeholder="🧭 Search" onChange={onChange} />
				<Category>{activeCategory}</Category>
				<div
					onClick={e => {
						e.stopPropagation();

						if ((e.target as HTMLElement).tagName !== 'BUTTON') {
							return;
						}

						const [y, x] = (e.target as HTMLButtonElement).dataset
							.coords!.split(':')
							.map(item => parseInt(item, 10)) as Coords;

						const emoji = chunked[x]?.[y];

						if (!emoji) {
							// Wtf
							return;
						}

						props.onPick(emoji);
					}}
				>
					<MemoList emojis={chunked} />
				</div>
			</Container>
		</PickerProvider>
	);
};

export {getCssText} from './stitches';

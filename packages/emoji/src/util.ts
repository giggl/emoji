import {ChangeEventHandler, useState} from 'react';

/**
 * Chunk an array into subsets of that array
 * @param array
 * @param length Amount of items to chunk by
 */
export function chunk<T>(array: T[], length: number) {
	const chunks: T[][] = [];
	let i = 0;

	while (i < array.length) {
		chunks.push(array.slice(i, (i += length)));
	}

	return chunks;
}

export type InputTransformer = (value: string) => string;

export function useInput<
	T extends HTMLElement & Pick<HTMLInputElement, 'value'>,
	Transformers extends InputTransformer[],
>(initial = '', ...transformers: Transformers) {
	const [state, setState] = useState(initial);

	const onChange: ChangeEventHandler<T> = event => {
		if (transformers.length) {
			setState(
				transformers.reduce(
					(prev, transformer) => transformer(prev),
					event.target.value,
				),
			);
		} else {
			setState(event.target.value);
		}
	};

	return {state, setState, onChange} as const;
}

export function useToggle(initial = false) {
	const [state, setState] = useState(initial);

	const handlers = {
		on: () => {
			setState(true);
		},

		off: () => {
			setState(false);
		},

		toggle: () => {
			setState(value => !value);
		},

		reset: () => {
			setState(initial);
		},
	};

	return [state, handlers] as const;
}

import {ChangeEventHandler as onChange, useState} from 'react';

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

export function useInput<T extends HTMLInputElement>(
	initial = '',
	transformers: InputTransformer[] = [],
) {
	const [state, setState] = useState(initial);

	const setter: onChange<T> = event => {
		if (transformers.length) {
			setState(
				transformers.reduce(
					(acc, transformer) => transformer(acc),
					event.target.value,
				),
			);
		} else {
			setState(event.target.value);
		}
	};

	return {state, setState, setter};
}

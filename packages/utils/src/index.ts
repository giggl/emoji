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

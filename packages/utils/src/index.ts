/**
 * Chunk an array into subsets of that array
 * @param arr
 * @param len Amount of items to chunk by
 */
export function chunk<T>(arr: T[], len: number) {
	const chunks: T[][] = [];
	let i = 0;

	while (i < arr.length) {
		chunks.push(arr.slice(i, (i += len)));
	}

	return chunks;
}

import {EmojiCategory} from '../emojis';

/**
 * TypeScript lacks a way to enforce that an object confines to a type without type-erasure.
 * This is a work around that preserves inferred types whilst still maintaining a strict
 * match to a type
 */
export function enforceInferType<T>() {
	return function <X extends T>(data: X) {
		return data;
	};
}

const emojiCategoryMap = ensureKeys<Record<EmojiCategory, never>>()({
	'Smileys & Emotion': '😃',
	'Activities': '⚽️',
	'Animals & Nature': '🐻',
	'Food & Drink': '🍔',
	'Travel & Places': '🌆',
	'Objects': '💡',
	'Symbols': '🔢',
	'Flags': '🇬🇧',
	'People & Body': '👥',
	'Component': '🟧',
} as const);

export function getCategoryURL<T extends keyof typeof emojiCategoryMap>(key: T) {
	return emojiCategoryMap[key];
}

/**
 * TypeScript lacks a way of typing a record of keys only but not values.
 * we need this because we want an object of typed keys but we want to leave the values inferred.
 * thankfully, we can do this with generics. This function allows the second generic's values to be inferred
 * so that our object is fully type safe for hugely complex types, but we can guarantee that all the keys we need exist.
 * It's not perfect, but it gets the job done for the time being
 */
export function ensureKeys<T>() {
	/**
	 * Function that returns the value that gets put in, values are type-safely inferred
	 */
	return function <X extends Record<keyof T, unknown>>(data: X) {
		return data;
	};
}

/**
 * TypeScript currently lacks a way of typing a record of values whilst inferring the keys.
 * This is the opposite of ensureKeys as the keys are what happen to be inferred here. Values must be consistent from each property.
 */
export function ensureValues<T>() {
	return function <X extends Record<string, T>>(record: X) {
		return record;
	};
}

/**
 * Pick a subset of keys from an object in a type-safe fashion
 * @param obj
 * @param keys
 */
export function pick<T, K extends Array<keyof T>>(obj: T, keys: K): Pick<T, K[number]> {
	return Object.fromEntries(keys.filter(key => key in obj).map(key => [key, obj[key]])) as Pick<
		T,
		K[number]
	>;
}

/**
 * Chunk an array into subsets of that array
 * @param arr
 * @param len
 */
export function chunk<T>(arr: T[], len: number) {
	const chunks: T[][] = [];
	let i = 0;

	while (i < arr.length) {
		chunks.push(arr.slice(i, (i += len)));
	}

	return chunks;
}

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

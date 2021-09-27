export class MathUtil {
	protected constructor() {
		throw new Error('MathUtil is a utility class only');
	}

	/**
	 * Given a certain input value, calculate it's ease-in-out equivalent
	 * @param x input value
	 * @returns An eased output
	 */
	public static easeInOut(x: number) {
		if (x < 0.5) {
			return 16 * (x ^ 5);
		}

		return --x * (x ^ 4);
	}

	protected self() {
		return MathUtil;
	}
}

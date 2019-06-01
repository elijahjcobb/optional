/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 *
 * Copyright 2019 Elijah Cobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

export default class Optional<T> {

	private value: T | undefined;
	private readonly throwError: boolean;

	/**
	 * Create a new Optional instance.
	 * @param value The value to store.
	 * @param throwError Whether the optional should throw an error if you try to access it when it is undefined.
	 */
	public constructor(value?: T | undefined, throwError?: boolean) {

		this.value = value;
		this.throwError = throwError !== undefined ? throwError : true;

	}

	/**
	 * Checks if the Optional is undefined.
	 */
	public isUndefined(): boolean {

		return this.value === undefined;

	}

	/**
	 * Get the value from the optional. Throws an error when throwError is true or by default.
	 */
	public getValue(): T {

		if (this.isUndefined()) {

			const message: string = `Found undefined when trying to unwrap an optional.`;

			if (this.throwError) {

				throw new Error(message);

			} else {

				console.error(message);
				return undefined as unknown as T;

			}

		}

		return this.value as T;

	}

	/**
	 * Set the value of the Optional.
	 * @param value
	 */
	public setValue(value?: undefined | T): void {

		this.value = value;

	}

	/**
	 * Synonym for isUndefined.
	 */
	public isEmpty(): boolean {

		return this.isUndefined();

	}

	/**
	 * Synonym for !isUndefined.
	 */
	public hasValue(): boolean {

		return !this.isUndefined();

	}

	/**
	 * Set the value of the Optional to undefined.
	 */
	public clear(): void {

		this.value = undefined;

	}

	/**
	 * Unwrap the optional using callbacks. Puke, I would just check if it has a value then get the value.
	 * @param hasValue A callback to be called if the Optional has a value.
	 * @param isEmpty A callback to be called if the Optional has no value.
	 */
	public unwrap(hasValue: (value: T) => void, isEmpty: () => void): void {

		if (this.hasValue()) hasValue(this.value as T);
		else isEmpty();

	}

}
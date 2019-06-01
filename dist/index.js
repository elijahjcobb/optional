"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class Optional {
    /**
     * Create a new Optional instance.
     * @param value The value to store.
     * @param throwError Whether the optional should throw an error if you try to access it when it is undefined.
     */
    constructor(value, throwError) {
        this.value = value;
        this.throwError = throwError !== undefined ? throwError : true;
    }
    /**
     * Checks if the Optional is undefined.
     */
    isUndefined() {
        return this.value === undefined;
    }
    /**
     * Get the value from the optional. Throws an error when throwError is true or by default.
     */
    getValue() {
        if (this.isUndefined()) {
            const message = `Found undefined when trying to unwrap an optional.`;
            if (this.throwError) {
                throw new Error(message);
            }
            else {
                console.error(message);
                return undefined;
            }
        }
        return this.value;
    }
    /**
     * Set the value of the Optional.
     * @param value
     */
    setValue(value) {
        this.value = value;
    }
    /**
     * Synonym for isUndefined.
     */
    isEmpty() {
        return this.isUndefined();
    }
    /**
     * Synonym for !isUndefined.
     */
    hasValue() {
        return !this.isUndefined();
    }
    /**
     * Set the value of the Optional to undefined.
     */
    clear() {
        this.value = undefined;
    }
    /**
     * Unwrap the optional using callbacks. Puke, I would just check if it has a value then get the value.
     * @param hasValue A callback to be called if the Optional has a value.
     * @param isEmpty A callback to be called if the Optional has no value.
     */
    unwrap(hasValue, isEmpty) {
        if (this.hasValue())
            hasValue(this.value);
        else
            isEmpty();
    }
}
exports.default = Optional;

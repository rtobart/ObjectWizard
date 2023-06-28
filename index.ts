/**
 * Utility library for object manipulation in arrays.
 *
 * This library provides a set of utility functions for manipulating arrays of objects. It includes
 * a function to check the inclusion of an object in an array and retrieve its index by converting
 * the objects into strings for comparison purposes.
 *
 * This library is useful when you need to search for objects within an array based on their values,
 * regardless of their reference identity. By converting the objects into strings, you can perform
 * equality comparisons effectively.
 *
 * @author [Robinson Tobar](https://github.com/rtobart)
 * @version 1.0.0
 * @license MIT
 */

export { includesObject } from './includesObject';
export { indexOfObject } from './indexOfObject';
export { paginate } from './paginate';
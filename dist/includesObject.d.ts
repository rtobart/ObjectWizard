/**
 * Checks if an object is included in an array of objects.
 *
 * @param objectsArray - The array of objects to search in.
 * @param object - The object to check for inclusion.
 * @returns A boolean indicating whether the object is included in the array.
 * @throws {TypeError} If either the `objectsArray` or `object` parameters are not valid arrays.
 *
 * @example
 * const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
 * const object = { id: 1, name: 'John' };
 *
 * console.log(includesObject(array, object)); // Output: true
 */
export declare const includesObject: (objectsArray: Object[], object: Object) => boolean;

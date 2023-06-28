/**
 * Retrieves the index of an object within an array of objects.
 *
 * @param objectsArray - The array of objects to search in.
 * @param object - The object to find the index of.
 * @returns The index of the object in the array, or -1 if the object is not found.
 * @throws {TypeError} If either the `objectsArray` or `object` parameters are not valid arrays.
 *
 * @example
 * const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
 * const object = { id: 2, name: 'Jane' };
 *
 * console.log(indexOfObject(array, object)); // Output: 1
 */
export declare const indexOfObject: (objectsArray: Object[], object: Object) => number;

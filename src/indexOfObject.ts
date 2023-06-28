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
export const indexOfObject = (objectsArray: Object[], object: Object):number => {
    if (!Array.isArray(objectsArray)) {
        throw new TypeError('The "objectsArray" parameter must be an array.');
    }
    if (Object.prototype.toString.call(object) !== '[object Object]') {
        throw new TypeError('The "object" parameter must be an object.');
    }
    const stringsArray = objectsArray.map((item: Object) => JSON.stringify(item))
    return stringsArray.indexOf(JSON.stringify(object))
}
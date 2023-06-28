"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
/**
 * Paginate array of objects.
 *
 * @param objectsArray - The array of objects to paginate.
 * @param pageSize - Size of element to you want per page.
 * @returns array of objectBook.
 *
 */
const paginate = (objectsArray, pageSize, position) => {
    if (!Array.isArray(objectsArray)) {
        throw new TypeError('The "objectsArray" parameter must be an objects array: [{},].');
    }
    if (typeof pageSize !== "number") {
        throw new TypeError('The "pageSize" parameter must be a number.');
    }
    if (pageSize < 1) {
        throw new TypeError('The "pageSize" parameter must be a positive number.');
    }
    const paginatedArray = [];
    if (objectsArray.length > 0) {
        const pages = Math.ceil(objectsArray.length / pageSize);
        for (let i = 0; i < pages; i++) {
            const constent = objectsArray.filter((item, index) => {
                return index >= i * pageSize && index < (i + 1) * pageSize;
            });
            paginatedArray.push({
                pageNumber: i + 1,
                pageSize: constent.length,
                totalPages: pages,
                data: constent,
            });
        }
    }
    if (position && position > 0 && position <= paginatedArray.length) {
        return paginatedArray.find((item) => item.pageNumber === position) || [];
    }
    return paginatedArray;
};
exports.paginate = paginate;

type objectBook = {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    data: Object[];
};
/**
 * Paginate array of objects.
 *
 * @param objectsArray - The array of objects to paginate.
 * @param pageSize - Size of element to you want per page.
 * @returns array of objectBook.
 *
 */
export declare const paginate: (objectsArray: Object[], pageSize: number, position?: number) => objectBook[] | objectBook;
export {};

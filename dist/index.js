"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = exports.indexOfObject = exports.includesObject = void 0;
var includesObject_1 = require("./includesObject");
Object.defineProperty(exports, "includesObject", { enumerable: true, get: function () { return includesObject_1.includesObject; } });
var indexOfObject_1 = require("./indexOfObject");
Object.defineProperty(exports, "indexOfObject", { enumerable: true, get: function () { return indexOfObject_1.indexOfObject; } });
var paginate_1 = require("./paginate");
Object.defineProperty(exports, "paginate", { enumerable: true, get: function () { return paginate_1.paginate; } });

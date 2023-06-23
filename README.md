# ObjectWizard

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()

## Description

ObjectWizard is a powerful utility library for JavaScript/TypeScript that provides an extensive set of functions for working with objects. Whether you need to manipulate, search, or perform operations on objects, ObjectWizard has you covered.

## Features

- Check object inclusion in an array of objects
- Retrieve the index of an object within an array of objects
- Efficiently compare and manipulate objects
- Simplify object-related tasks with utility functions
- Compatible with JavaScript and TypeScript

## Installation

You can install ObjectWizard using npm:

```bash
npm install objectwizard
```

## Usage
Import ObjectWizard into your project:

```js
import { includesObject, indexOfObject } from 'objectwizard';

// Example usage
const objectsArray = [{ id: 1, name: 'John' }, { id: 2, name: 'Mary' }];
const object1 = { id: 1, name: 'John' };
const object2 = { id: 3, name: 'Peter' };

console.log(includesObject(objectsArray, object1)); // true
console.log(indexOfObject(objectsArray, object2)); // -1
```
## Contributing
Contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

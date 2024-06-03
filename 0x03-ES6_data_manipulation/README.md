# README

This document provides a brief overview of how to use JavaScript's powerful array methods—map, filter, and reduce—as well as an introduction to Typed Arrays, and the Set, Map, and Weak data structures.

## Array Methods

### map

Transforms each element in an array using a provided function.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### filter

Creates a new array with elements that pass the provided test function.

```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

### reduce

Reduces the array to a single value using a provided reducer function.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10
```

## Typed Arrays

Array-like objects for accessing raw binary data.

```javascript
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // 42
```

## Set, Map, and Weak Data Structures

### Set

Collection of unique values.

```javascript
const set = new Set([1, 2, 2]);
console.log(set.size); // 2
```

### Map

Key-value pairs where keys can be any type.

```javascript
const map = new Map();
map.set('name', 'John');
console.log(map.get('name')); // John
```

### WeakSet

Holds objects weakly, allowing garbage collection.

```javascript
let obj = {name: 'John'};
const weakSet = new WeakSet([obj]);
obj = null; // obj is eligible for garbage collection
```

### WeakMap

Key-value pairs with object keys held weakly.

```javascript
let key = {};
const weakMap = new WeakMap();
weakMap.set(key, {data: 42});
key = null; // key is eligible for garbage collection
```
# Conclusion
Understanding these methods and data structures can improve the efficiency and clarity of your JavaScript code.
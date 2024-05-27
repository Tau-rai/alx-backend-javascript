# README
This document briefly explains the main concepts covered in this repository. 

# What is ES6?

ES6, also known as ECMAScript 2015, is a significant update to the JavaScript language, adding many new features and syntactical improvements. These enhancements aim to make JavaScript more powerful, flexible, and easier to write.

## New Features Introduced in ES6

### Constants and Variables

**Constants (`const`):**
- Constants are block-scoped variables that cannot be reassigned once declared.
- Example:
  ```javascript
  const PI = 3.14;
  ```

**Variables (`let`):**
- Variables declared with `let` are block-scoped and can be reassigned.
- Example:
  ```javascript
  let name = "John";
  name = "Doe";
  ```

### Block-Scoped Variables

Variables declared with `let` and `const` are scoped to the block in which they are defined. This means they are only accessible within the specific block and not outside of it.

```javascript
{
  let x = 2;
  const y = 3;
}
// x and y are not accessible here
```

### Arrow Functions

Arrow functions provide a more concise syntax for writing functions and lexically bind the `this` value.

```javascript
const add = (a, b) => a + b;
```

### Default Function Parameters

Function parameters can have default values, which are used if no argument is provided.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
```

### Rest and Spread Parameters

**Rest Parameters:**
- Allows functions to accept an indefinite number of arguments as an array.
- Example:
  ```javascript
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  ```

**Spread Parameters:**
- Expands an array into individual elements.
- Example:
  ```javascript
  const arr = [1, 2, 3];
  console.log(...arr); // 1 2 3
  ```

### String Templating

Template literals provide an easier way to create multi-line strings and include variables within strings using backticks and `${}` syntax.

```javascript
const name = "World";
console.log(`Hello, ${name}!`);
```

### Object Creation and Properties

ES6 introduces shorthand syntax for object properties and methods, making object creation more concise.

```javascript
const age = 25;
const person = {
  name: "Alice",
  age,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

### Iterators and For-Of Loops

The `for-of` loop provides a simpler way to iterate over iterable objects (like arrays, strings, etc.).

```javascript
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value); // 10, 20, 30
}
```

## Conclusion

ES6 introduced many features that significantly improve the readability and functionality of JavaScript. These features help developers write cleaner, more maintainable code and leverage the full power of modern JavaScript.
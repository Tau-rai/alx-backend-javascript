# README

## Introduction

This README provides a guide on key concepts of object-oriented programming in JavaScript. It covers defining a class, adding methods, using static methods, extending classes, and delves into metaprogramming and symbols.


## Defining a Class

In JavaScript, a class is defined using the `class` keyword followed by the class name. The constructor method is used to initialize the class properties.

```javascript
class MyClass {
    constructor(attribute1, attribute2) {
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
    }
}
```

## Adding Methods to a Class

Methods are functions defined within a class that operate on instances of that class. They do not require a special keyword and are added directly within the class body.

```javascript
class MyClass {
    constructor(attribute1, attribute2) {
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
    }

    method1() {
        return this.attribute1;
    }

    method2(value) {
        this.attribute2 = value;
    }
}
```

## Static Methods

### Why Use Static Methods

Static methods belong to the class itself rather than any object instance. They are used when the method neither accesses the instance (using `this`) nor modifies its properties. They can be utility functions that relate to the class but do not need to access its data.

### How to Add a Static Method

Static methods are defined using the `static` keyword before the method name.

```javascript
class MyClass {
    static staticMethod() {
        console.log("This is a static method.");
    }
}
```

Static methods can be called on the class itself.

```javascript
MyClass.staticMethod();
```

## Extending a Class

Class inheritance allows one class (the child class) to inherit properties and methods from another class (the parent class). This promotes code reuse and can introduce additional functionality.

```javascript
class ParentClass {
    constructor(parentAttribute) {
        this.parentAttribute = parentAttribute;
    }

    parentMethod() {
        return this.parentAttribute;
    }
}

class ChildClass extends ParentClass {
    constructor(parentAttribute, childAttribute) {
        super(parentAttribute);
        this.childAttribute = childAttribute;
    }

    childMethod() {
        return this.childAttribute;
    }
}
```

## Metaprogramming and Symbols

Metaprogramming refers to the techniques in which code can manipulate code itself. This can be done using features like proxies, symbols, and dynamic property names.

Symbols in JavaScript are a unique and immutable primitive value and can be used as object property keys. They are often used to avoid name conflicts between properties.

### Example of Using Symbols

Using symbols to create unique property keys:

```javascript
const symbol1 = Symbol('uniqueKey');
const symbol2 = Symbol('uniqueKey');

const obj = {
    [symbol1]: 'value1',
    [symbol2]: 'value2'
};

console.log(obj[symbol1]); // value1
console.log(obj[symbol2]); // value2
console.log(symbol1 === symbol2); // false
```

## Conclusion

This guide provided an overview of defining classes, adding methods, using static methods, extending classes, and the basics of metaprogramming in JavaScript. Each of these concepts is foundational to effective object-oriented programming and leveraging JavaScript's full capabilities.

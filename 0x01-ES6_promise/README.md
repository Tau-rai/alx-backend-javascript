# JavaScript Promises and Async Programming

## Promises

### What are Promises?
Promises represent the eventual completion or failure of an asynchronous operation, providing a cleaner way to handle async code compared to callbacks.

### Why Use Promises?
They offer easier chaining of async operations and centralized error handling.

### How to Create and Use a Promise
A Promise is created with the `Promise` constructor:
```javascript
const myPromise = new Promise((resolve, reject) => {
  if (true) resolve("Success!");
  else reject("Failure!");
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Promise Methods
- `Promise.resolve(value)`: Returns a resolved Promise.
- `Promise.reject(reason)`: Returns a rejected Promise.
- `Promise.all(iterable)`: Resolves when all Promises in the iterable resolve.
- `Promise.race(iterable)`: Resolves or rejects as soon as one Promise resolves or rejects.

## Throw / Try-Catch
Error handling for synchronous code:
```javascript
try {
  throw new Error("Error!");
} catch (error) {
  console.error(error.message);
}
```

## The `await` Operator
Used inside `async` functions to pause execution until a Promise resolves:
```javascript
async function fetchData() {
  const data = await fetch("https://api.example.com/data").then(res => res.json());
  return data;
}
```

## Using `async` Functions
`async` functions return Promises and can use `await` for asynchronous operations:
```javascript
async function asyncFunction() {
  try {
    const result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

asyncFunction();
```

### Example
```javascript
async function getUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    if (!response.ok) throw new Error("Network error");
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
}

getUserData();
```

## Conclusion
Promises and `async`/`await` streamline asynchronous programming in JavaScript, enhancing readability, error handling, and the management of complex workflows.
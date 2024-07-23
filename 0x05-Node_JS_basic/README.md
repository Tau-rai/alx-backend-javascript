# README

This project demonstrates various functionalities using Node.js, including running JavaScript, using Node.js modules, reading files, accessing command line arguments and environment variables, creating HTTP servers with Node.js and Express.js, using ES6 with Babel-node, and developing faster with Nodemon.

## Table of Contents

- [Installation](#installation)
- [Running JavaScript with Node.js](#running-javascript-with-nodejs)
- [Using Node.js Modules](#using-nodejs-modules)
- [Reading Files with Node.js](#reading-files-with-nodejs)
- [Accessing Command Line Arguments and Environment Variables](#accessing-command-line-arguments-and-environment-variables)
- [Creating a Small HTTP Server with Node.js](#creating-a-small-http-server-with-nodejs)
- [Creating a Small HTTP Server with Express.js](#creating-a-small-http-server-with-expressjs)
- [Creating Advanced Routes with Express.js](#creating-advanced-routes-with-expressjs)
- [Using ES6 with Node.js and Babel-node](#using-es6-with-nodejs-and-babel-node)
- [Developing Faster with Nodemon](#developing-faster-with-nodemon)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/nodejs-project.git
    cd nodejs-project
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Running JavaScript with Node.js

To run a JavaScript file using Node.js, use the following command:
```bash
node yourfile.js
```

## Using Node.js Modules

Node.js modules can be used to organize code. Here's an example of using a custom module:
```javascript
// myModule.js
module.exports = function() {
    console.log("Hello from my module!");
};

// main.js
const myModule = require('./myModule');
myModule();
```

## Reading Files with Node.js

Use the `fs` module to read files:
```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

## Accessing Command Line Arguments and Environment Variables

Use `process.argv` to access command line arguments and `process.env` to access environment variables:
```javascript
// Accessing command line arguments
console.log(process.argv);

// Accessing environment variables
console.log(process.env.MY_ENV_VAR);
```

## Creating a Small HTTP Server with Node.js

Create a simple HTTP server using the `http` module:
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

## Creating a Small HTTP Server with Express.js

Create a simple HTTP server using Express.js:
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

## Creating Advanced Routes with Express.js

Define advanced routes with Express.js:
```javascript
const express = require('express');
const app = express();

app.get('/users/:userId', (req, res) => {
    res.send(`User ID: ${req.params.userId}`);
});

app.post('/users', (req, res) => {
    res.send('User created');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

## Using ES6 with Node.js and Babel-node

Use Babel to transpile ES6 code:
1. Install Babel:
    ```bash
    npm install @babel/core @babel/cli @babel/preset-env @babel/node --save-dev
    ```

2. Create a `.babelrc` file:
    ```json
    {
        "presets": ["@babel/preset-env"]
    }
    ```

3. Run your ES6 code with Babel-node:
    ```bash
    npx babel-node yourfile.js
    ```

## Developing Faster with Nodemon

Use Nodemon to automatically restart the server on file changes:
1. Install Nodemon:
    ```bash
    npm install -g nodemon
    ```

2. Run your application with Nodemon:
    ```bash
    nodemon yourfile.js
    ```
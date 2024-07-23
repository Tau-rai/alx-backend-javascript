// Create a more complex HTTP server using Node's http module
const http = require('http');
const countStudents = require('./3-read_file_async');

const f = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const originalConsoleLog = console.log;
    const logs = [];
    console.log = (message) => logs.push(message);

    countStudents(f)
      .then(() => {
        console.log = originalConsoleLog;
        res.end(`This is the list of our students\n${logs.join('\n')}`);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {});

module.exports = app;

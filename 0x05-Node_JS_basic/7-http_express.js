// Create a more complex http server using Express
const express = require('express');
const countStudents = require('./3-read_file_async');

const f = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  if (!f) {
    res.send('Database file not provided');
    return;
  }

  try {
    const originalConsoleLog = console.log;
    const logs = [];
    console.log = (message) => logs.push(message);

    await countStudents(f);

    console.log = originalConsoleLog;
    res.send(`This is the list of our students\n${logs.join('\n')}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {});

module.exports = app;

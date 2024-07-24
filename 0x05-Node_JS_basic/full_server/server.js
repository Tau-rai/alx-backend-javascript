// server.js
import express from 'express';
import router from './routes';

const app = express();
const port = 1245;

// Middleware to inject the database file path into the request
app.use((request, response, next) => {
  request.databaseFilePath = './database.csv'; // Path to the database file
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

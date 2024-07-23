const express = require('express');
const routes = require('./full_server/routes/index');

// server module
const app = express();

app.use('/', routes);

const port = 1245;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;

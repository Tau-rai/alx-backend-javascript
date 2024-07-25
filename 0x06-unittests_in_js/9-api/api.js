// basic express server
const express = require('express');

const app = express();

// middleware to parse json bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  if (isNaN(req.params.id)) {
    res.status(404).send('Cart not found');
  } else {
    res.send(`Payment methods for cart ${req.params.id}`);
  }
});

const port = 7865;
app.listen(port, () => {
    console.log('API available on localhost port 7865');
    });

module.exports = app;

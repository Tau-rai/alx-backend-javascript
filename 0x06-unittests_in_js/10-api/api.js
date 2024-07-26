// basic express server
const express = require('express');

const app = express();
const port = 7865;

// middleware to parse json bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});


app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Fallback route for invalid cart id 
app.get('/cart/*', (req, res) => {
  res.status(404).send('Cart ID must be a number');
});

app.get('/available_payments', (req, res) => {
  res.json({
      payment_methods: {
          credit_cards: true,
          paypal: false
      }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
    console.log('API available on localhost port 7865');
    });

module.exports = app;

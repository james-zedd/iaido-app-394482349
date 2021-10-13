const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const mongoConnection = require('./api/config/db');

// Middleware: Body Parser
app.use(express.json());

// Initiate DB via Mongoose
mongoConnection();

app.get('/', (req, res, next) => {
  res.send('Hello from home page');
});

// Define Routes
app.use('/api/techniques', require('./api/routes/techniques'));
app.use('/api/movements', require('./api/routes/movements'));

app.listen(5000, () => console.log('app started on port 5000'));
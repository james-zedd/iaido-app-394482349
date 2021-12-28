const express = require('express');
const res = require('express/lib/response');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');

const mongoConnection = require('./api/config/db');

// CORS
app.use(cors());

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
app.use('/api/users', require('./api/routes/users'));
app.use('/api/auth', require('./api/routes/auth'));

app.listen(5000, () => console.log('app started on port 5000'));
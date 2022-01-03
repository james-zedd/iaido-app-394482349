const express = require('express');
const res = require('express/lib/response');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');

const mongoConnection = require('./api/config/db');

// public access
app.use(express.static('public'));

// CORS
app.use(cors());

// Middleware: Body Parser
app.use(express.json());

// Initiate DB via Mongoose
mongoConnection();

// Define Routes
app.use('/api/techniques', require('./api/routes/techniques'));
app.use('/api/movements', require('./api/routes/movements'));
app.use('/api/users', require('./api/routes/users'));
app.use('/api/auth', require('./api/routes/auth'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(5000, () => console.log('app started on port 5000'));
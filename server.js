const express = require('express');
const res = require('express/lib/response');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const mongoConnection = require('./api/config/db');

// public access
app.use(express.static('public'));

// Middleware: CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://iaido-app.herokuapp.com'],
  optionSuccessStatus: 200,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'httponly', 'Authorization']
}
app.use(cors(corsOptions));

// Middleware: Body Parser
app.use(express.json());

// Middleware: Cookie Parser
app.use(cookieParser());

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('app started on port 5000'));
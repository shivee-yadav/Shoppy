const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//const { validationResult } = require('express-validator');
require('dotenv').config();

const userRoutes = require('./routes/user');

const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  family: 4
}).then(() => console.log('DB Connected'));

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes Middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

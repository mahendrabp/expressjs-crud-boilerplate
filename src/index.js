const express = require('express');
const Route = express.Router();

const categories = require('./routes/categoryRoute');

Route.use('/categories', categories);

module.exports = Route;

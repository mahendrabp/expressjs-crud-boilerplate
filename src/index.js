const express = require('express');
const Route = express.Router();

const categories = require('./routes/categoryRoute');
const companies = require('./routes/companyRoute');

Route.use('/categories', categories);
Route.use('/companies', companies);

module.exports = Route;

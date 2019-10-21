const express = require('express');
const Route = express.Router();

const categories = require('./routes/categoryRoute');
const companies = require('./routes/companyRoute');
const jobs = require('./routes/jobRoute');
const users = require('./routes/userRoute');

Route.use('/categories', categories);
Route.use('/companies', companies);
Route.use('/jobs', jobs);
Route.use('/users', users);
Route.use('/', (req, res) => {
  res.send('halo');
});

module.exports = Route;

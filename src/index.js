const express = require('express');
const Route = express.Router();

//import each of Route
const categories = require('./routes/categoryRoute');
const companies = require('./routes/companyRoute');
const jobs = require('./routes/jobRoute');
const users = require('./routes/userRoute');

//then route to this
Route.use('/api/v1/categories', categories);
Route.use('/api/v1/companies', companies);
Route.use('/api/v1/jobs', jobs);
Route.use('/api/v1/users', users);

Route.use('/', (req, res) => {
  res.send('halo');
});

//export
module.exports = Route;

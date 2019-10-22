const express = require('express');
const jobController = require('../controllers/jobController');
// const cache = require('../helpers/redis');
const cache = require('express-redis-cache')();

const Router = express.Router();

Router.get('/', jobController.getJob)
  .get('/:id', jobController.getJobById)
  .post('/', cache.route(), jobController.postJob)
  .patch('/:id', cache.route(), jobController.updateJob)
  .delete('/:id', cache.route(), jobController.deleteJob);

module.exports = Router;

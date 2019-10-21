const express = require('express');
const jobController = require('../controllers/jobController');
const redis = require('redis');

const Router = express.Router();

Router.get('/', jobController.getJob)
  .get('/:id', jobController.getJobById)
  .post('/', jobController.postJob)
  .patch('/:id', jobController.updateJob)
  .delete('/:id', jobController.deleteJob);

module.exports = Router;

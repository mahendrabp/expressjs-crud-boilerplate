const express = require('express');
const jobController = require('../controllers/jobController');
// const cache = require('../helpers/redis');
const upload = require('../helpers/multer');

const Router = express.Router();

Router.get('/', jobController.getJob)
  .get('/:id', jobController.getJobById)
  .post('/', upload, jobController.postJob)
  .patch('/:id', upload, jobController.updateJob)
  .delete('/:id', upload, jobController.deleteJob);

module.exports = Router;

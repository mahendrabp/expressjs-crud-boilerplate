const express = require('express');
const jobController = require('../controllers/jobController');

const Router = express.Router();

Router.get('/', jobController.getJob);

module.exports = Router;

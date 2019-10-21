const express = require('express');
const userController = require('../controllers/userController');

const Router = express.Router();

Router.post('/', userController.postUser);

module.exports = Router;

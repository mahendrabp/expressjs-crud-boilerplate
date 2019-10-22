const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');
const cache = require('express-redis-cache')();

const Router = express.Router();

// Passport Authenticate
const isAuthorize = passport.authenticate('jwt', { session: false });

Router.get('/', cache.route(), userController.getUser)
  .get('/:id', isAuthorize, userController.getUserById)
  .post('/login', userController.loginUser)
  .post('/register', cache.route(), userController.registerUser)
  .patch('/:id', isAuthorize, userController.updateUser)
  .delete('/:id', isAuthorize, userController.deleteUser);

module.exports = Router;

const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const Router = express.Router();

// Passport Authenticate
const isAuthorize = passport.authenticate('jwt', { session: false });

Router.get('/', userController.getUser)
  .get('/:id', userController.getUserById)
  .post('/login', userController.loginUser)
  .post('/register', userController.registerUser)
  .patch('/:id', isAuthorize, userController.updateUser)
  .delete('/:id', isAuthorize, userController.deleteUser);

module.exports = Router;

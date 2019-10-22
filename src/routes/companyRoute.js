const express = require('express');
const companyController = require('../controllers/companyController');
const cache = require('express-redis-cache')();

const Router = express.Router();

Router.get('/', cache.route(), companyController.getCompany)
  .get('/:id', cache.route(), companyController.getCompanyById)
  .post('/', cache.route(), companyController.postCompany)
  .patch('/:id', cache.route(), companyController.updateCompany)
  .delete('/:id', cache.route(), companyController.deleteCompany);

module.exports = Router;

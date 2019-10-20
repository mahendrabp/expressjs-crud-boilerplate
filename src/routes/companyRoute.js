const express = require('express');
const companyController = require('../controllers/companyController');

const Router = express.Router();

Router.get('/', companyController.getCompany)
  .get('/:id', companyController.getCompanyById)
  .post('/', companyController.postCompany)
  .patch('/:id', companyController.updateCompany)
  .delete('/:id', companyController.deleteCompany);

module.exports = Router;

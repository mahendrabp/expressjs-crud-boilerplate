const express = require('express');
const companyController = require('../controllers/companyController');
const upload = require('../helpers/multer');

const Router = express.Router();

Router.get('/', companyController.getCompany)
  .get('/:id', companyController.getCompanyById)
  .post('/', upload, companyController.postCompany)
  .patch('/:id', upload, companyController.updateCompany)
  .delete('/:id', companyController.deleteCompany);

module.exports = Router;

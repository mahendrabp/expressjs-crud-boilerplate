const express = require('express');
const categoryController = require('../controllers/categoryController');

const Router = express.Router();

//Request category_table
Router.get('/', categoryController.getCategory)
  // Router.get('/:id', categoryController.getCategoryById);
  .post('/', categoryController.postCategory);
// Router.put('/:id', categoryController.updateCategory);
// Router.delete('/:id', categoryController.deleteCategory);

module.exports = Router;

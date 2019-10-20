const express = require('express');
const categoryController = require('../controllers/categoryController');

const Router = express.Router();

//Request category_table
Router.get('/', categoryController.getCategory)
  .get('/:id', categoryController.getCategoryById)
  // Router.get('/:id', categoryController.getCategoryById);
  .post('/', categoryController.postCategory)
  .patch('/:id', categoryController.updateCategory)
  .delete('/:id', categoryController.deleteCategory);
// Router.put('/:id', categoryController.updateCategory);
// Router.delete('/:id', categoryController.deleteCategory);

module.exports = Router;

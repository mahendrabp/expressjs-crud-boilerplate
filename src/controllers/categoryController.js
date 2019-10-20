const categoryModel = require('../models/category');

const categoryController = {
  getCategory: (req, res) => {
    categoryModel
      .getCategory(req)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  postCategory: (req, res) => {
    const { category } = req.body;
    const data = {
      category
    };
    categoryModel
      .postCategory(data)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = categoryController;

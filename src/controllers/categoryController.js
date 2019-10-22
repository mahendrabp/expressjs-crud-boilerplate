const categoryModel = require('../models/category');

const categoryController = {
  getCategory: (req, res) => {
    categoryModel
      .getCategory(req)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  getCategoryById: (req, res) => {
    categoryModel
      .getCategoryById(req)
      .then(result => {
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(400).json(`${result}Category ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
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
        res.status(400).json(err);
      });
  },

  updateCategory: (req, res) => {
    const id = req.params.id;
    const { category } = req.body;
    const data = {
      category
    };

    categoryModel
      .updateCategory(data, id)
      .then(result => {
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(400).json(`Category ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  deleteCategory: (req, res) => {
    const id = req.params.id;

    categoryModel
      .deleteCategory(id)
      .then(result => {
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(400).json(`Category ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};

module.exports = categoryController;

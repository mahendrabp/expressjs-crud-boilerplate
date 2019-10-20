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

  getCategoryById: (req, res) => {
    categoryModel
      .getCategoryById(req)
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
  },

  //   updateCategory: (req, res) => {
  //     const id = req.params.id;
  //     const category = req.body;

  //     const data = {
  //       category
  //     };

  //     categoryModel
  //       .updateCategory(data, id)
  //       .then(result => {
  //         res.json(result);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }

  updateCategory: (req, res) => {
    const id = req.params.id;
    const { category } = req.body;
    const data = {
      category
    };

    categoryModel
      .updateCategory(data, id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  deleteCategory: (req, res) => {
    const id = req.params.id;

    categoryModel
      .deleteCategory(id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = categoryController;

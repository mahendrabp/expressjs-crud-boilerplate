const categoryModel = require('../models/category');
const client = require('../helpers/redis');

const categoryController = {
  // getCategory: (req, res) => {
  //   categoryModel
  //     .getCategory(req)
  //     .then(result => {
  //       res.status(200).json(result);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // },

  /**
   * @description :
   * @param {request from front end} req
   * @param {response from backend} res
   */

  getCategory: (req, res) => {
    const categoryKeyRedis = 'root:categories';
    return client.get(categoryKeyRedis, (err, result) => {
      if (result) {
        return res.json({ source: 'cache', data: JSON.parse(result) });
      } else {
        categoryModel
          .getCategory(req)
          .then(result => {
            client.setex(categoryKeyRedis, 3600, JSON.stringify(result));
            return res.json({ source: 'api', data: result });
          })
          .catch(error => {
            console.log(error);
            return res.json(error.toString());
          });
      }
    });
  },

  getCategoryById: (req, res) => {
    categoryModel
      .getCategoryById(req)
      .then(result => {
        if (result.length > 0) {
          res.status(200).json(result);
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
        res.send(200, {
          message: 'success add category'
        });
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
          res.send(200, {
            message: 'success update category'
          });
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
          res.status(200).json(result);
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

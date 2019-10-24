const categoryModel = require('../models/category');
const client = require('../helpers/redis');

const categoryController = {
  /**
   * @description :
   * @param {request from front end} req
   * @param {response from backend} res
   */

  getCategory: (req, res) => {
    const categoryKeyRedis = `${req.originalUrl}`;
    return client.get(categoryKeyRedis, (err, result) => {
      if (result) {
        return res.json({
          source: 'cache',
          message: 'this result from cache',
          data: JSON.parse(result)
        });
      } else {
        categoryModel
          .getCategory(req)
          .then(result => {
            client.setex(categoryKeyRedis, 3600, JSON.stringify(result));
            return res.json({
              source: 'api',
              message: 'this result from api',
              data: result
            });
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
        if (result.length < 1) {
          res.status(400).json(`${result}Category ID Not Found`);
        } else {
          console.log(result);
          res.status(200).json(result);
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
        res.status(200).send({
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
      .getCategoryById(req)
      .then(result => {
        if (result.length > 0) {
          categoryModel
            .updateCategory(data, id)
            .then(result => {
              res.status(200).send({
                message: 'success update category'
              });
            })
            .catch(err => {
              res.status(400).json(err);
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
      .getCategoryById(req)
      .then(result => {
        if (result.length > 0) {
          categoryModel
            .deleteCategory(id)
            .then(result => {
              res.status(200).send({
                message: 'success delete category'
              });
            })
            .catch(err => {
              res.status(400).json(err);
            });
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

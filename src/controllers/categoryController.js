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
          error: false,
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
              error: false,
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
          return res.json({
            status: 404,
            error: true,
            message: 'category ID Not found'
          });
        } else {
          res.status(200).json(result);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  postCategory: (req, res) => {
    console.log(req.body.category);
    if (
      req.body.category === null ||
      req.body.category === [] ||
      req.body.category === ''
    ) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `category can't be empty`
      });
    }
    const { category } = req.body;
    const data = {
      category
    };
    categoryModel
      .postCategory(data)
      .then(result => {
        return res.status(200).json({
          status: 200,
          error: false,
          message: 'success add category'
        });
      })
      .catch(err => {
        return res.status(400).json({
          status: 400,
          error: true,
          message: 'category already exist'
        });
      });
  },

  updateCategory: (req, res) => {
    const id = req.params.id;
    if (
      req.body.category === null ||
      req.body.category === [] ||
      req.body.category === ''
    ) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `category can't be empty`
      });
    }

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
              console.log(result);
              return res.status(200).json({
                status: 200,
                error: false,
                message: 'success update category'
              });
            })
            .catch(err => {
              return res.status(404).json({
                status: 404,
                error: true,
                message: 'category already exist'
              });
            });
        } else {
          return res.status(404).json({
            status: 404,
            error: true,
            message: 'category ID not found'
          });
        }
      })
      .catch(err => {
        return res.status(404).json({
          status: 400,
          error: true,
          message: 'error'
        });
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
              return res.status(200).json({
                status: 200,
                error: false,
                message: 'success delete category'
              });
            })
            .catch(err => {
              res.status(400).json(err);
            });
        } else {
          return res.status(404).json({
            status: 404,
            error: true,
            message: 'category ID not found'
          });
        }
      })
      .catch(err => {
        return res.status(400).json({
          status: 400,
          error: true,
          message: 'error'
        });
      });
  }
};

module.exports = categoryController;

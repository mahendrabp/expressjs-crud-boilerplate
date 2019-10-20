const conn = require('../configs/db');

const categoryModel = {
  getCategory: () => {
    const sql = 'SELECT * FROM categories';
    return new Promise((resolve, reject) => {
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  postCategory: data => {
    const sql = 'INSERT INTO categories SET ?';
    return new Promise((resolve, reject) => {
      conn.query(sql, [body.name], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  updateCategory: (req, res) => {},
  deleteCategory: (req, res) => {}
};

module.exports = categoryModel;

const conn = require('../configs/db');

const categoryModel = {
  getCategory: () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM categories';
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  getCategoryById: req => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM categories WHERE id=?';
      conn.query(sql, req.params.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  postCategory: data => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM categories WHERE category = ?';
      conn.query(sql, data.category, (err, result) => {
        console.log(result.length > 0);
        if (result.length < 1) {
          const sql = 'INSERT INTO categories SET ?';
          conn.query(sql, data, (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(err);
            }
          });
        } else {
          reject(err);
        }
      });
    });
  },

  updateCategory: (data, id) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM categories WHERE category = ?';
      conn.query(sql, data.category, (err, result) => {
        console.log(result.length === 1);
        if (result.length < 1) {
          const sql = 'INSERT INTO categories SET ?';
          conn.query(sql, data, (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(err);
            }
          });
        } else {
          reject(err);
        }
      });
    });
  },

  deleteCategory: id => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM categories WHERE id = ?';
      conn.query(sql, [id], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};

module.exports = categoryModel;

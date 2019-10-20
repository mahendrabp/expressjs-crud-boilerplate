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

  getCategoryById: req => {
    const sql = 'SELECT * FROM categories WHERE id=?';
    return new Promise((resolve, reject) => {
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
    const sql = 'INSERT INTO categories SET ?';
    return new Promise((resolve, reject) => {
      conn.query(sql, data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  // updateCategory: req => {
  //   return new Promise((resolve, reject) => {
  //     const param = req.params;
  //     const body = req.body;
  //     const sql = 'UPDATE categories SET category=? WHERE id = ?';
  //     conn.query(sql, [body.name, param.id], (err, result) => {
  //       if (!err) {
  //         resolve(result);
  //       } else {
  //         reject(new Error(err));
  //       }
  //     });
  //   });
  // },

  updateCategory: (data, id) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE categories SET ? WHERE id = ?';
      conn.query(sql, [data, id], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
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

const conn = require('../configs/db');

const companyModel = {
  getCompany: () => {
    const sql = 'SELECT * FROM companies';
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

  getCompanyById: req => {
    const sql = 'SELECT * FROM companies WHERE id=?';
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

  postCompany: data => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM companies WHERE name = ?';
      conn.query(sql, data.name, (err, result) => {
        console.log(result.length > 0);
        if (result.length < 1) {
          const sql = 'INSERT INTO companies SET ?';
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

  updateCompany: (data, id) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM companies WHERE name = ?';
      conn.query(sql, data.name, (err, result) => {
        // console.log(result.length === 1);
        if (result.length < 1) {
          const sql = 'INSERT INTO companies SET ?';
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

  updateCategory: (req, res) => {
    categoryModel
      .getCategoryById(req)
      .then(response => {
        if (response.length > 0) {
          categoryModel
            .updateCategory(req)
            .then(response => {
              form.success(res, 200, response);
            })
            .catch(error => {
              form.error(res, 400, error);
            });
        } else {
          form.error(res, 400, 'Category ID Not Found');
        }
      })
      .catch(error => {
        form.error(res, 400, error);
      });
  },
  deleteCompany: id => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM companies WHERE id = ?';
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

module.exports = companyModel;

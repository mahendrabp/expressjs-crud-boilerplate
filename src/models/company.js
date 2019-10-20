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
    const sql = 'INSERT INTO companies SET ?';
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

  updateCompany: (data, id) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE companies SET ? WHERE id = ?';
      conn.query(sql, [data, id], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
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

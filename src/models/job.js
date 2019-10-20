const conn = require('../configs/db');

const jobModel = {
  getJob: () => {
    const sql =
      'SELECT j.name, o.name as company , c.category as category, j.description, j.salary, j.location, j.created_at, j.updated_at FROM jobs j INNER JOIN categories c INNER JOIN companies o WHERE j.category_id = c.id AND j.company_id = o.id';

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

  getJobById: req => {
    const sql =
      'SELECT j.name, o.name as company , c.category as category, j.description, j.salary, j.location, j.created_at, j.updated_at FROM jobs j INNER JOIN categories c INNER JOIN companies o WHERE j.id=? AND j.category_id = c.id AND j.company_id = o.id';
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
  postJob: data => {
    const sql = 'INSERT INTO jobs SET ?';
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
  updateJob: (data, id) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE jobs SET ? WHERE id = ?';
      conn.query(sql, [data, id], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  deleteJob: id => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM jobs WHERE id = ?';
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

module.exports = jobModel;

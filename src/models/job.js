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
  getJobById: () => {},
  postJob: () => {},
  updateJob: () => {},
  deleteCompany: () => {}
};

module.exports = jobModel;

const conn = require('../configs/db');
const pagination = require('../helpers/pagination');
const sortBy = require('../helpers/sortBy');

const jobModel = {
  // make a variable to locate model of job
  // this parameter 'req' below is for pagination , if you delete parameter 'req', it will error , try !
  getJob: req => {
    let page = pagination.pagination(req); // make a variable page which contain 'pagination.pagination(req)' , pagination first is from import above, pagination second is name export from that , then take parameter req
    let name = req.query.name; // this variable name is contain req.query.name , remember query is parameter from URL , like localhost:3000/?nama=
    let company = req.query.company;
    let sort = sortBy.sortBy(req); // same as page above

    let sql =
      'SELECT j.name as job, o.name as company , c.category as category, j.description, j.salary, j.location, j.created_at, j.updated_at FROM jobs j INNER JOIN categories c INNER JOIN companies o WHERE j.company_id = o.id AND j.category_id = c.id';

    return new Promise((resolve, reject) => {
      // Promise? idk what is this, we will study this later
      if (name != null || company != null) {
        sql += ' AND j.name LIKE ? AND o.name LIKE ?';
      } else {
        sql;
      }

      if (sort.sortBy != null) {
        sql += sort.sql;
      }

      const paging = `${sql} LIMIT ? OFFSET ?`;

      if (name == null && company == null) {
        conn.query(paging, [page.limit, page.offset], (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        });
      } else {
        conn.query(
          paging,
          ['%' + name + '%', '%' + company + '%', page.limit, page.offset],
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(err);
            }
          }
        );
      }
    });
  },

  getJobById: req => {
    const sql =
      'SELECT j.name, o.id as company_id, o.name as company , c.id as category_id, c.category as category, j.description, j.salary, j.location, j.created_at, j.updated_at FROM jobs j INNER JOIN categories c INNER JOIN companies o WHERE j.id=? AND j.category_id = c.id AND j.company_id = o.id';
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

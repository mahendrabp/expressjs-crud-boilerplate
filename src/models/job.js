const conn = require('../configs/db');
const pagination = require('../helpers/pagination');
// const sortBy = require('../helpers/sortBy');
const { countAllPage } = require('../helpers/pagination');
const { searchJob } = require('../helpers/pagination');
const { sortBy } = require('../helpers/pagination');

const jobModel = {
  // make a variable to locate model of job
  // this parameter 'req' below is for pagination , if you delete parameter 'req', it will error , try !
  getJob: (req, page) => {
    let sql =
      'SELECT j.id as id,j.name as job, o.name as company , o.description as companyDesc, c.category as category, o.logo as logo, j.category_id,j.company_id,j.description, j.salary, j.location, j.created_at, j.updated_at FROM jobs j INNER JOIN categories c INNER JOIN companies o WHERE j.company_id = o.id AND j.category_id = c.id';

    const query = searchJob(req, sql);
    sql = sortBy(req, query.sql);
    const paging = `${sql} LIMIT ? OFFSET ?`;

    return new Promise((resolve, reject) => {
      countAllPage(page, query.name, query.location, 'jobs')
        .then(maxPage => {
          const infoPage = {
            currentPage: page.page,
            totalAllJob: maxPage.total,
            maxPage: maxPage.maxPage,
            next: ''
          };

          conn.query(
            paging,
            query.name == null && query.location == null
              ? [page.item, page.offset]
              : [
                  '%' + query.name + '%',
                  '%' + query.location + '%',
                  page.item,
                  page.offset
                ],
            (err, result) => {
              if (!err) {
                resolve({
                  infoPage,
                  result
                });
              } else {
                reject(err);
              }
            }
          );
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  getJobById: req => {
    return new Promise((resolve, reject) => {
      const sql =
        'SELECT j.name, o.id as company_id, o.name as company , c.id as category_id, c.category as category, j.description, j.salary, j.location, j.created_at, j.updated_at FROM jobs j INNER JOIN categories c INNER JOIN companies o WHERE j.id=? AND j.category_id = c.id AND j.company_id = o.id';
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
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO jobs SET ?';
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

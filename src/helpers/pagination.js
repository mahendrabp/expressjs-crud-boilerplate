const conn = require('../configs/db');

module.exports.pagination = req => {
  let item = Number(req.query.limit) || 5; //Default by 5;
  let page = Number(req.query.page) || 1; //Default by 1;
  let offset = item * (page - 1);

  return { item, offset, page };
};

//Get Max Page For Pagination
module.exports.countAllPage = (page, keyword, keyword2, table) => {
  return new Promise((resolve, reject) => {
    if (keyword != null) {
      table += ' WHERE name LIKE ?';
    }
    if (keyword != null) {
      table += ' && location LIKE ?';
    }

    conn.query(
      `SELECT COUNT(*) as total FROM ${table}`,
      ['%' + keyword + '%', '%' + keyword2 + '%'],
      (err, result) => {
        if (!err) {
          console.log(result[0].total);
          console.log(page.item);
          const maxPage = Math.ceil(result[0].total / page.item);
          if (maxPage >= page.page) {
            resolve({
              total: result[0].total,
              maxPage: maxPage
            });
          } else {
            // reject(`only until page ${maxPage}`);
            reject({
              message: `only until page ${maxPage}`
            });
          }
        } else reject(err);
      }
    );
  });
};

//Sort Product By
module.exports.sortBy = (req, sql) => {
  const sortBy = req.query.sortby;
  const orderBy = req.query.orderby;

  if (sortBy == 'name') {
    sql += ' ORDER BY j.name';
  } else if (sortBy == 'category') {
    sql += ' ORDER BY c.category';
  } else {
    sql += ' ORDER BY j.updated_at';
  }

  if (sortBy != null) {
    if (orderBy == 'asc' || orderBy == null) {
      sql += ' ASC';
    } else if (orderBy == 'desc') {
      sql += ' DESC';
    }
  }
  return sql;
};

//Search Product By
module.exports.searchJob = (req, sql) => {
  const search = req.query.search;
  const name = req.query.name; // this variable name is contain req.query.name , remember query is parameter from URL , like localhost:3000/?nama=
  const location = req.query.location;

  if (name != null || location != null) {
    sql += ' AND j.name LIKE ? AND j.location LIKE ?';
  } else {
    sql;
  }

  // if (search != null) {
  //   sql += ` AND j.name LIKE ? `;
  // }

  // return {
  //   sql,
  //   search
  // };

  return {
    sql,
    name,
    location
  };
};

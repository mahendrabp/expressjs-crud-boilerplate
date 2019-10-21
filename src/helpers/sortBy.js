module.exports.sortBy = req => {
  const sortBy = req.query.sortBy;
  let sql = '';

  if (sortBy == 'name') {
    sql += ' ORDER BY j.name';
  } else if (sortBy == 'category') {
    sql += ' ORDER BY c.category';
  } else {
    sql += ' ORDER BY j.updated_at';
  }

  return { sql, sortBy };
};

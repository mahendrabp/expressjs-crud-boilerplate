module.exports.pagination = req => {
  let limit = Number(req.query.limit) || 5; //Default by 10;
  let page = Number(req.query.page) || 1; //Default by 1;
  let offset = limit * (page - 1);

  return { limit, offset };
};

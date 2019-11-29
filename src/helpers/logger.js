const moment = require('moment'); // add moment for date formatting

// middleware
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}:://${req.get('host')}${
      req.originalUrl
    } : ${moment().format()}`
  );
  next();
};

module.exports = logger;

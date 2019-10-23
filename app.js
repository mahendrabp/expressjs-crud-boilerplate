const express = require('express'); // must be there
const bodyParser = require('body-parser');
const configs = require('./src/configs/configs'); // import cofiguration file
const cors = require('cors');
const logger = require('./src/helpers/logger');
// const redis = require('redis');
const passport = require('passport');

const app = express(); // init app express
const port = configs.port; // take port
const routerNav = require('./src/index'); // this is for Route

//start redist //
// const client = redis.createClient(6379); // wtf idk what is this
// client.on('connect', () => {
//   console.log(`connected to redis`);
// });
// client.on('error', err => {
//   console.log(`Error: ${err}`);
// });

// let redisMiddleware = (req, res, next) => {
//   let key = '__expIress__' + req.originalUrl || req.url;
//   client.get(key, function(err, reply) {
//     if (reply) {
//       res.send(reply);
//     } else {
//       res.sendResponse = res.send;
//       res.send = body => {
//         client.set(key, JSON.stringify(body));
//         res.sendResponse(body);
//       };
//       next();
//     }
//   });
// };
//end redis //

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./src/helpers/auth')(passport);

//listen port
app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`);
});

app.use(logger); // use logger

//start use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// end use body-parser

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();

  app.options('*', (req, res) => {
    // allowed XHR methods
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PATCH, PUT, POST, DELETE, OPTIONS'
    );
    res.send();
  });
});

//root route yanng atas
app.use('/', routerNav);

module.exports = app;

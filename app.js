const express = require('express');
const bodyParser = require('body-parser');
const configs = require('./src/configs/configs');
const cors = require('cors');
const logger = require('./src/helpers/logger');
const redis = require('redis');
// const logger = require('morgan')

const app = express();
const port = configs.port;
const routerNav = require('./src/index');

const client = redis.createClient(6379);

client.on('connect', () => {
  console.log(`connected to redis`);
});
client.on('error', err => {
  console.log(`Error: ${err}`);
});

app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`);
});
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(logger('dev'));
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

app.use('/', routerNav);

module.exports = app;

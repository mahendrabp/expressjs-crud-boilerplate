const express = require('express'); // must be there
const bodyParser = require('body-parser');
const cors = require('cors');
const configs = require('./src/configs/configs'); // import cofiguration file
const logger = require('./src/helpers/logger');
const passport = require('passport');
require('./src/helpers/auth')(passport);

const app = express(); // init app express
const port = configs.port; // take port
const routerNav = require('./src/index'); // this is for Route
require('colors');

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(logger); // use logger

//start use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// end use body-parser

app.use(cors());

//root route yanng atas
app.use('/', routerNav);

//listen port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`.yellow.bold);
});

module.exports = app;

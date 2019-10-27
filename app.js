const express = require('express'); // must be there
const bodyParser = require('body-parser');
const cors = require('cors');
const configs = require('./src/configs/configs'); // import cofiguration file
const logger = require('./src/helpers/logger');
const passport = require('passport');
require('./src/helpers/auth')(passport);
const multer = require('multer');

const app = express(); // init app express
//start use body-parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// end use body-parser
const port = configs.port; // take port
const routerNav = require('./src/index'); // this is for Route
require('colors');

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(logger); // use logger

//root route yanng atas
app.use('/', routerNav);

//listen port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`.yellow.bold);
});

module.exports = app;

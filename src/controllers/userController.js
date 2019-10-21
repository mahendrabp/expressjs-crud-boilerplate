const userModel = require('../models/user');
const uuidv4 = require('uuid/v4');

const userController = {
  postUser: (req, res) => {
    const id = uuidv4();
    const { name, password } = req.body;
    const data = {
      id,
      name,
      password
    };
    userModel
      .postUser(data)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = userController;

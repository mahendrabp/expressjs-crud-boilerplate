const userModel = require('../models/user');
const uuid = require('uuid/v4');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const client = require('../helpers/redis');

/**
 * @description :
 * @param {request from front end} req
 * @param {response from backend} res
 */

const userController = {
  getUser: (req, res) => {
    userModel
      .getUser()
      .then(result => {
        if (result.length < 1) {
          res.status(400).json({ message: 'User is empty' });
        } else {
          res.status(200).json(result);
        }
      })
      .catch(err => console.log(err));
  },

  getUserById: (req, res) => {
    userModel
      .getUserById(req)
      .then(result => {
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(404).json(`${result}User ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  loginUser: (req, res) => {
    const { email, password } = req.body;
    userModel
      .getUser()
      // .then(result => {
      //   const arrayEmail = result.filter(function(person) {
      //     return person.email == email;
      //   });

      //   if (arrayEmail.length == 0) {
      //     res.status(400).send('error no id found');
      //   } else {
      //     const passArr = arrayEmail[0].password;
      //     return passArr;
      //   }
      // })
      .then(result => {
        const arrayEmail = result.filter(el => {
          return el.email == email;
        });

        if (arrayEmail.length == 0) {
          res.status(400).send({
            error: 'id or email not found'
          });

          return (arrayEmail[0] = {
            password: 0
          });
        }

        const passArr = arrayEmail[0].password;

        bcrypt.compare(password, passArr).then(isMatch => {
          if (isMatch) {
            userModel
              .loginUser(email, password)
              .then(result => {
                // for Payload
                const payload = {
                  id: result.id,
                  email: result.email,
                  password: result.password
                };

                // for Token
                jwt.sign(payload, 'secret', { expiresIn: 60 }, (err, token) => {
                  if (err) console.log(err);
                  res.json({
                    status: 200,
                    error: false,
                    message: 'Success to login',
                    token: 'Bearer ' + token
                  });
                });
              })
              .catch(err => console.log(err));
          } else {
            res.json({
              status: 400,
              error: true,
              message: 'Password invalid'
            });
          }
        });
      })
      .catch(err => console.log(err));
  },

  registerUser: (req, res) => {
    const id = uuid();
    const { email, password } = req.body;
    const data = { id, email, password };
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(data.password, salt, (err, hash) => {
        data.password = hash;
        userModel
          .registerUser(data)
          .then(result =>
            res.json({
              status: 200,
              error: false,
              message: 'Success to register new user',
              data
            })
          )
          .catch(err => console.log(err));
      });
    });
  },

  updateUser: (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    const data = {};
    if (email) data.email = email;
    if (password) data.password = password;
    if (typeof data.password == 'undefined') {
      userModel
        .updateUser(data, id)
        .then(result =>
          res.json({
            status: 200,
            error: false,
            message: `Success to updating user with ID: ${id}`,
            data
          })
        )
        .catch(err => console.log(err));
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(data.password, salt, (err, hash) => {
          if (err) throw err;
          data.password = hash;
          userModel
            .updateUser(data)
            .then(result =>
              res.json({
                status: 200,
                error: false,
                message: `Success to updating password of user with ID: ${id}`,
                data
              })
            )
            .catch(err => console.log(err));
        });
      });
    }
  },

  deleteUser: (req, res) => {
    const { id } = req.params;
    userModel
      .deleteUser(id)
      .then(result =>
        res.json({
          status: 200,
          error: false,
          message: 'Deleting successful'
        })
      )
      .catch(err => console.log(err));
  }
};

module.exports = userController;

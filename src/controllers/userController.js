const userModel = require('../models/user');
const uuid = require('uuid/v4');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const client = require('../helpers/redis');
// const form = require('../helpers/formresponse');
const secretKey = process.env.API_JWT_SECRET || 'secret';

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
          res
            .status(400)
            .json({ status: 400, error: true, message: 'User is empty' });
        } else {
          result.forEach(k => delete k.password);
          res.status(200).json({
            status: 200,
            error: false,
            message: 'data user',
            data: result
          });
        }
      })
      .catch(err => console.log(err));
  },

  getUserById: (req, res) => {
    userModel
      .getUserById(req)
      .then(result => {
        if (result.length > 0) {
          result.forEach(k => delete k.password);
          res.status(200).json({
            status: 200,
            error: false,
            message: 'data user',
            data: result
          });
        } else {
          res.status(404).json({
            status: 404,
            error: true,
            message: `User ID Not Found`
          });
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  loginUser: (req, res) => {
    const { email, password } = req.body;
    if (
      req.body.email == null ||
      req.body.email == '' ||
      req.body.email === null
    ) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `email can't be empty`
      });
    }

    if (req.body.password == null || req.body.password == '') {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `password can't be empty`
      });
    }

    userModel
      .getUser()
      .then(result => {
        //filter apakah ada email di database
        const arrayEmail = result.filter(el => {
          return el.email == email;
        });

        if (arrayEmail.length == 0) {
          res.status(404).send({
            status: 404,
            error: true,
            message: 'id or email not found'
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
                jwt.sign(
                  payload,
                  secretKey,
                  { expiresIn: 3600 },
                  (err, token) => {
                    if (err) console.log(err);
                    console.log(token);
                    res.json({
                      status: 200,
                      error: false,
                      message: 'Success to login',
                      token: token
                    });
                  }
                );
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
    // const { email, password } = req.body;

    // let passwd = password;

    const isEmailValid = email => {
      const checkRegex = /\S+@\S+\.\S+/;
      return email.match(checkRegex) == null ? false : true;
    };
    const isPasswordValid = password => {
      const checkRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
      return password.match(checkRegex) == null ? false : true;
    };

    if (req.body.email === '' || req.body.email === null) {
      return res
        .status(400)
        .json({ status: 400, error: true, message: 'email can not be empty' });
    } else if (!isEmailValid(req.body.email)) {
      return res
        .status(400)
        .json({ status: 400, error: true, message: 'email must be valid' });
    }
    const email = req.body.email;

    if (req.body.password == '' || req.body.password == null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: 'password can not be null'
      });
    } else if (!isPasswordValid(req.body.password)) {
      return res
        .status(400)
        .json({ status: 400, error: true, message: 'password must be valid' });
    }
    const password = req.body.password;

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
              data: {
                email
              }
            })
          )
          .catch(err => {
            return res.status(400).json({
              status: 400,
              error: true,
              message: 'unexpected error'
            });
          });
      });
    });
  },

  updateUser: (req, res) => {
    const { id } = req.params;
    const isEmailValid = email => {
      const checkRegex = /\S+@\S+\.\S+/;
      return email.match(checkRegex) == null ? false : true;
    };
    const isPasswordValid = password => {
      const checkRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
      return password.match(checkRegex) == null ? false : true;
    };

    if (req.body.email == '' || req.body.email == null) {
      return res
        .status(400)
        .json({ status: 400, error: true, message: 'email can not be empty' });
    } else if (!isEmailValid(req.body.email)) {
      return res
        .status(400)
        .json({ status: 400, error: true, message: 'email must be valid' });
    }
    const email = req.body.email;

    if (req.body.password == '' || req.body.password == null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: 'password can not be null'
      });
    } else if (!isPasswordValid(req.body.password)) {
      return res
        .status(400)
        .json({ status: 400, error: true, message: 'password must be valid' });
    }
    const password = req.body.password;

    // const data = { id, email, password };
    // const { email, password } = req.body;
    const data = {};
    if (email) data.email = email;
    if (password) data.password = password;

    userModel
      .getUserById(req)
      .then(response => {
        if (response.length > 0) {
          if (typeof data.password == 'undefined') {
            userModel
              .updateUser(data, id)
              .then(result =>
                res.json({
                  status: 200,
                  error: false,
                  message: `Success to updating user with ID: ${id}`,
                  data: {
                    email
                  }
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
                      message: `Success to updating user with ID: ${id}`,
                      data: {
                        email
                      }
                    })
                  )
                  .catch(err => {
                    return res.status(400).json({
                      status: 400,
                      error: true,
                      message: 'email already taken'
                    });
                  });
              });
            });
          }
        } else {
          res.status(400).json({ message: 'user not found' });
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  deleteUser: (req, res) => {
    const { id } = req.params;
    userModel
      .getUserById(req)
      .then(result => {
        if (result.length > 0) {
          userModel
            .deleteUser(id)
            .then(result => {
              res.json({
                status: 200,
                error: false,
                message: `Success delete user with ID: ${id}`
              });
            })
            .catch(err => {
              res.status(400).json(err);
            });
        } else {
          res.status(404).json({
            status: 404,
            error: false,
            message: `User ID not found`
          });
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};

module.exports = userController;

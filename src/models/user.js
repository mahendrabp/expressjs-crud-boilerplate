const conn = require('../configs/db');
const bcrypt = require('bcryptjs');

const userModel = {
  getUser: () => {
    const sql = 'SELECT * FROM users';
    return new Promise((resolve, reject) => {
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },

  getUserById: req => {
    const sql = 'SELECT * FROM users WHERE id=?';
    return new Promise((resolve, reject) => {
      conn.query(sql, req.params.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },

  loginUser: (email, password) => {
    const sql = 'SELECT * FROM users WHERE email=? AND password=?';
    return new Promise((resolve, reject) => {
      conn.query(sql, [email, password], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },

  registerUser: data => {
    const sql = 'INSERT INTO users SET ?';
    return new Promise((resolve, reject) => {
      conn.query(sql, data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },

  updateUser: (data, id) => {
    const sql = 'UPDATE users SET ? WHERE id=?';
    return new Promise((resolve, reject) => {
      conn.query(sql, [data, id], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },

  deleteUser: id => {
    const sql = 'DELETE FROM users WHERE id=?';
    return new Promise((resolve, reject) => {
      conn.query(sql, [id], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};

module.exports = userModel;

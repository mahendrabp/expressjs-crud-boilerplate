const conn = require('../configs/db');
// const bcrypt = require('bcryptjs');

const userModel = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM users';
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
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM users WHERE id=?';
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
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM users WHERE email=? AND password=?';
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
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM users WHERE email = ?';
      conn.query(sql, data.email, (err, result) => {
        console.log(result.length);
        if (result.length < 1) {
          const sql = 'INSERT INTO users SET ?';
          conn.query(sql, data, (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          });
        } else {
          reject(err);
        }
      });
      // const sql = 'INSERT INTO users SET ?';
      // conn.query(sql, data, (err, result) => {
      //   if (!err) {
      //     resolve(result);
      //   } else {
      //     reject(new Error(err));
      //   }
      // });
    });
  },

  // updateUser: (data, id) => {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'UPDATE users SET ? WHERE id=?';
  //     conn.query(sql, [data, id], (err, result) => {
  //       if (!err) {
  //         resolve(result);
  //       } else {
  //         reject(new Error(err));
  //       }
  //     });
  //   });
  // },
  updateUser: (data, id) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM users WHERE email = ?';
      conn.query(sql, data.email, (err, result) => {
        console.log(result.length);
        if (result.length < 1) {
          const sql = 'UPDATE users SET ? WHERE id=?';
          conn.query(sql, [data, id], (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(err);
            }
          });
        } else {
          reject(err);
        }
      });
    });
  },

  deleteUser: id => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM users WHERE id=?';
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

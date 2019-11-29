// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const conn = require('../configs/db');

require('dotenv');

// const opts = {
//   // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   // secretOrKey: process.env.SECRET_OR_KEY
// };
// let opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
// // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
// opts.secretOrKey = process.env.API_JWT_SECRET;

// module.exports = passport => {
//   passport.use(
//     new JwtStrategy(opts, (jwt_payload, done) => {
//       conn.query(
//         `SELECT * FROM users WHERE id = '${jwt_payload.id}'`,
//         (err, result) => {
//           if (!err) {
//             return done(null, result);
//           } else {
//             return done(null, false);
//           }
//         }
//       );
//     })
//   );
// };

require('dotenv');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.API_JWT_SECRET
};

// module.exports = passport => {
//   passport.use(
//     new JwtStrategy(opts, (jwt_payload, done) => {
//       conn.query(
//         `SELECT * FROM users WHERE id = '${jwt_payload.id}'`,
//         (err, result) => {
//           if (!err) {
//             return done(null, result);
//           } else {
//             return done(null, false);
//           }
//         }
//       );
//     })
//   );
// };

const passport = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      conn.query(
        `SELECT * FROM users WHERE id = '${jwt_payload.id}'`,
        (err, result) => {
          if (!err) {
            return done(null, result);
          } else {
            return done(null, false);
          }
        }
      );
    })
  );
};

module.exports = passport;

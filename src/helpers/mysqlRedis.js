const { MysqlRedis, HashTypes, Caching } = require('mysql-redis');
const client = require('./mysqlRedis');
const conn = require('../configs/db');

const cacheOptions = {
  expire: 2629746, // seconds, defaults to 30 days
  keyPrefix: 'sql.', // default
  hashType: HashTypes.md5, //default
  caching: Caching.CACHE //default
};

const sqlredis = new MysqlRedis(conn, client, cacheOptions);

module.exports = sqlredis;

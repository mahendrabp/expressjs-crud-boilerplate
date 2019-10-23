const redis = require('redis');
const client = redis.createClient(6379);

// wtf idk what is this
client.on('connect', () => {
  console.log(`connected to redis`);
});
client.on('error', err => {
  console.log('Error ' + err);
});

module.exports = client;

//https://medium.com/tech-tajawal/introduction-to-caching-redis-node-js-e477eb969eab

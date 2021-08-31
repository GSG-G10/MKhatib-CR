const connection = require('../connection');

module.exports = (username) => connection.query('SELECT id FROM users where username= $1', [username]);

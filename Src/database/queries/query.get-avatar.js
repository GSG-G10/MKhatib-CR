const connection = require('../connection');

module.exports = (id) => connection.query('SELECT avatar FROM users WHERE id = $1', [id]);

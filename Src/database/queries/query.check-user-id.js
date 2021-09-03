const connection = require('../connection');

module.exports = (userId) => connection.query(
  `SELECT EXISTS (
       SELECT id FROM users WHERE id = $1)`,
  [userId],
);

const connection = require('../connection');

module.exports = (id) => connection.query(
  'SELECT password FROM USERS WHERE id = $1', [id],
);

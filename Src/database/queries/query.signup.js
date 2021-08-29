const connection = require('../connection');

module.exports = (username, email, firstName, lastName, password) => connection.query(
  'INSERT INTO users (username, email, first_name, last_name, password) VALUES ($1, $2, $3, $4, $5) RETURNING *', [username, email, firstName, lastName, password],
);

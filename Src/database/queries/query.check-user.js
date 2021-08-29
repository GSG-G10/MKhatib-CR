const connection = require('../connection');

module.exports = (username) => connection.query(
  `SELECT CASE WHEN EXISTS 
  (SELECT username FROM users
    WHERE
    username = '${username}')
    THEN 'true'
    ELSE 'false' END`,
);

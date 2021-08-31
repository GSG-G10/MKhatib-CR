const connection = require('../connection');

module.exports = (newCommunityName) => connection.query(
  'INSERT INTO communities (community_name) VALUES ($1)',
  [newCommunityName],
);

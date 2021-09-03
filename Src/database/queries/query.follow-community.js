const connection = require('../connection');

module.exports = (userId, communityId) => connection.query(
  `INSERT INTO community_members
     (user_id, community_id) VALUES ($1,$2) RETURNING *`, [userId, communityId],
);

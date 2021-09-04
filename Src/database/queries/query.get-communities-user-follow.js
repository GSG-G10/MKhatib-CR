const connection = require('../connection');

module.exports = (userId) => connection.query(
  `SELECT community_name
   FROM communities
    WHERE id IN 
    ( SELECT community_id
         FROM community_members
          WHERE user_id = $1)`, [userId],
);

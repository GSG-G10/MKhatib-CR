const connection = require('../connection');

module.exports = (ownerId, communityId, postTitle) => connection.query(
  'select id from community_posts where owner_id = $1 AND community_id = $2 AND post_title = $3',
  [ownerId, communityId, postTitle],
);

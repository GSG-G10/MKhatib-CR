const connection = require('../connection');

module.exports = (
  userId,
  communityId,
  postTitle,
  contentType,
  content,
  postDate,
  flairName,
) => connection.query(
  'insert into community_posts (user_id, community_id, post_title, content_type, content, post_date, flair_name) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
  [userId, communityId, postTitle, contentType, content, postDate, flairName],
);

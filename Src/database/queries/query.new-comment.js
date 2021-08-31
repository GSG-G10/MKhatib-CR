const connection = require('../connection');

module.exports = (userId, postId, content, commentDate) => connection.query(
  'insert into post_comments (user_id, post_id,content, comment_date) VALUES ($1, $2, $3, $4)',
  [userId, postId, content, commentDate],
);

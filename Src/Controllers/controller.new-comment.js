const jwt = require('jsonwebtoken');
const { newComment } = require('../database/queries');

module.exports = (req, res, next) => {
  const { postId, content, commentDate } = req.body;
  const { token } = req.cookies;
  const { userId } = jwt.decode(token, (err, data) => data);
  newComment(userId, postId, content, commentDate)
    .then(() => next())
    .catch((err) => res.json(err.message));
};

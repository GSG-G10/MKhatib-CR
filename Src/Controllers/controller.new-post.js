const jwt = require('jsonwebtoken');
const { newPost } = require('../database/queries');

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  const decode = jwt.decode(token, (err, data) => data);
  const { userId } = decode;

  const {
    communityId,
    postTitle,
    contentType,
    content,
    postDate,
    flairName,
  } = req.body;
  newPost(userId, communityId, postTitle, contentType, content, postDate, flairName)
    .then(() => next())
    .catch((err) => res.json(err.message));
};

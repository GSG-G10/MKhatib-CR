const jwt = require('jsonwebtoken');
const { newPost } = require('../database/queries');

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  const decode = jwt.decode(token, (err, data) => data);
  const ownerId = decode.userId;

  const {
    communityId,
    postTitle,
    contentType,
    content,
    postDate,
    flairName,
  } = req.body;
  newPost(ownerId, communityId, postTitle, contentType, content, postDate, flairName)
    .then(() => next())
    .catch((err) => res.json(err.message));
};

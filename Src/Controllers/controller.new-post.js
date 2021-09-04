const jwt = require('jsonwebtoken');
const { newPost } = require('../database/queries');

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  const { userId } = jwt.decode(token, (err, data) => data);
  const ownerId = userId;
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

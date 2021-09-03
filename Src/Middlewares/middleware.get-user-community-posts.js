const jwt = require('jsonwebtoken');
const { getUserCommunityPosts, CheckUserId } = require('../database/queries');

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  const userData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  const { userId } = userData;
  CheckUserId(userId)
    .then((result) => result.rows[0].exists)
    .then((confirmed) => {
      if (confirmed) {
        getUserCommunityPosts(userId)
          .then((result) => result.rows)
          .then((communities) => res.json(communities))
          .then(() => next());
      }
    });
};

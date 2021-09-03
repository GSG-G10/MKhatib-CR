const jwt = require('jsonwebtoken');
const { FollowCommunity } = require('../database/queries');

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  const { userId } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  const { communityId } = req.body;
  const convertToNumber = parseInt(communityId, 10);
  FollowCommunity(userId, convertToNumber)
    .then((result) => result.rows[0].community_id)
    .then((data) => {
      req.body.communityId = data;
      next();
    });
};

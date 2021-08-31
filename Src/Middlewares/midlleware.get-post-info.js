const { getUserId, getCommunityId } = require('../database/queries');

module.exports = (req, res, next) => {
  const { owner, communityName } = req.body;
  getUserId(owner)
    .then((value) => value.rows[0].id)
    .then((value) => {
      req.body.ownerId = value;
    });
  getCommunityId(communityName)
    .then((value) => value.rows[0].id)
    .then((value) => {
      req.body.communityId = value;
      next();
    });
};

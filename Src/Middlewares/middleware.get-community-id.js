const { getCommunityId } = require('../database/queries');

module.exports = (req, res, next) => {
  const { communityName } = req.body;
  getCommunityId(communityName)
    .then((value) => value.rows[0].id)
    .then((value) => {
      req.body.communityId = value;
      next();
    })
    .catch(() => {
      res.json('Wrong Community Name');
    });
};

const { getSpecificPostsById } = require('../database/queries');

module.exports = (req, res, next) => {
  const { communityId } = req.body;
  getSpecificPostsById(communityId)
    .then((result) => {
      res.json(result.rows);
      next();
    });
};

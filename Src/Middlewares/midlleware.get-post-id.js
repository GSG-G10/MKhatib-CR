const { getPostId } = require('../database/queries');

module.exports = (req, res, next) => {
  const { ownerId, communityId, postTitle } = req.body;
  getPostId(ownerId, communityId, postTitle)
    .then((result) => result.rows[0].id)
    .then((postId) => {
      req.body.postId = postId;
      next();
    })
    .catch(() => res.json('You have Entered A Wrong Data'));
};

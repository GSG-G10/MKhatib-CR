const { getCommunities, CheckUserId } = require('../database/queries');

module.exports = (req, res) => {
  const { userId } = req.body;
  CheckUserId(userId)
    .then((result) => result.rows[0].exists)
    .then((confirmation) => {
      if (confirmation) {
        getCommunities(userId)
          .then((result) => result.rows)
          .then((communities) => res.json(communities));
      } else {
        res.status(204);
      }
    });
};

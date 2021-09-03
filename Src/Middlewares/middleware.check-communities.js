const jwt = require('jsonwebtoken');
const { getCommunities, CheckUserId } = require('../database/queries');

module.exports = (req, res) => {
  const { token } = req.cookies;
  try {
    const userData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const { userId } = userData;
    CheckUserId(userId)
      .then((result) => result.rows[0].exists)
      .then((confirmed) => {
        if (confirmed) {
          getCommunities(userId)
            .then((result) => result.rows)
            .then((communities) => res.json(communities));
        }
      });
  } catch (err) {
    res.status(402);
  }
};

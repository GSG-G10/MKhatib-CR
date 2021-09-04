const jwt = require('jsonwebtoken');
const { getCommunitiesUserFollow } = require('../database/queries');

module.exports = (req, res) => {
  const { token } = req.cookies;
  const { userId } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  getCommunitiesUserFollow(userId)
    .then((response) => res.json(response.rows))
    .catch(() => res.status(402));
};

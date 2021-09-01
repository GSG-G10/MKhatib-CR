const { newCommunity } = require('../database/queries');

module.exports = (req, res, next) => {
  const { communityName } = req.body;
  newCommunity(communityName)
    .then(() => next())
    .catch((err) => {
      const resultError = err.detail.split('=');
      return res.status(403).json(resultError[1]);
    });
};

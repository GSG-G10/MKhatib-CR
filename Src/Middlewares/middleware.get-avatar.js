const { getAvatar } = require('../database/queries');

module.exports = (req, res, next) => {
  const { userId } = req.body;
  getAvatar(userId)
    .then((result) => result.rows[0].avatar)
    .then((avatar) => {
      req.body.avatar = avatar;
      next();
    });
};

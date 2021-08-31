const { getUserId } = require('../database/queries');

module.exports = (req, res, next) => {
  const { username } = req.body;
  getUserId(username)
    .then((value) => value.rows[0].id)
    .then((value) => {
      req.body.userId = value;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

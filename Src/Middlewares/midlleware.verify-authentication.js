const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { token } = req.cookies;
  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const { userId, username } = user;
    req.body.userId = userId;
    req.body.username = username;
    next();
  } catch (err) {
    return res.redirect('/login');
  }
};
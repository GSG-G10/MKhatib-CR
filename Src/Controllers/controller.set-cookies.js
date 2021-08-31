require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { username, userId } = req.body;
  const accessToken = jwt.sign(
    { userId, username },
    process.env.ACCESS_TOKEN_SECRET,
  );
  res.cookie('token', accessToken, { maxAge: 3600 * 24 * 60 * 60 });
  next();
};

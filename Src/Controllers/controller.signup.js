const { signUp } = require('../database/queries');

const { hashPassword } = require('../Middlewares');

module.exports = (req, res, next) => {
  const {
    username, email, firstName, lastName, password,
  } = req.body;
  hashPassword(password)
    .then((hashedPass) => signUp(username, email, firstName, lastName, hashedPass))
    .catch((err) => new Error(err.message));
  res.redirect('/');
  next();
};

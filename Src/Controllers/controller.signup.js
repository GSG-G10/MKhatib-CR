const { signUp } = require('../database/queries');

const { hashPassword } = require('../Middlewares');

module.exports = (req, res, next) => {
  console.log(req.body);
  const {
    username, email, firstName, lastName, password,
  } = req.body;
  hashPassword(password)
    .then((hashedPass) => signUp(username, email, firstName, lastName, hashedPass))
    .then(() => {
      res.redirect('/');
      next();
    })
    .catch((err) => {
      const resultError = err.detail.split('=');
      return res.status(409).json(resultError[1]);
    });
};

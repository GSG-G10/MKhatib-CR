const { comparePassword } = require('../Middlewares');
const { getUserId, checkUser, getPassword } = require('../database/queries');

module.exports = (req, res, next) => {
  const {
    username, password,
  } = req.body;
  console.log(username);
  checkUser(username)
    .then((result) => {
      const userValidation = result.rows[0].case;
      if (userValidation === 'true') {
        getUserId(username)
          .then((data) => data.rows[0].id)
          .then((id) => {
            getPassword(id)
              .then((data) => data.rows[0].password)
              .then((dbPassword) => {
                comparePassword(password, dbPassword)
                  .then((condition) => condition)
                  .then((condition) => {
                    if (condition) {
                      next();
                    } else {
                      res.redirect('/worng-login');
                    }
                  });
              });
          });
      } else {
        res.redirect('/worng-login');
      }
    })
    .catch((err) => new Error(err.message));
};

const signUp = require('./query.signup');
const checkUser = require('./query.check-user');
const getUserId = require('./query.get-user-id');
const getPassword = require('./query.get-password');

module.exports = {
  signUp,
  checkUser,
  getUserId,
  getPassword,
};

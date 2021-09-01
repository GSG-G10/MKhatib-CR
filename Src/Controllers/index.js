const signUpUser = require('./controller.signup');
const signInUser = require('./conrtoller.signin');
const newPost = require('./controller.new-post');
const setCookies = require('./controller.set-cookies');
const newComment = require('./controller.new-comment');
const newCommunity = require('./controller.new-community');
const loginUser = require('./controller.login-user');
const signupUser = require('./controller.signup-user');
const logoutUser = require('./controller.logout-user');

module.exports = {
  signUpUser,
  signInUser,
  newPost,
  setCookies,
  newComment,
  newCommunity,
  loginUser,
  signupUser,
  logoutUser,
};

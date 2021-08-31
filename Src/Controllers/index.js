const signUpUser = require('./controller.signup');
const signInUser = require('./conrtoller.signin');
const newPost = require('./controller.new-post');
const setCookies = require('./controller.set-cookies');

module.exports = {
  signUpUser,
  signInUser,
  newPost,
  setCookies,
};

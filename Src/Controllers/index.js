const signUpUser = require('./controller.signup');
const signInUser = require('./conrtoller.signin');
const newPost = require('./controller.new-post');
const setCookies = require('./controller.set-cookies');
const newComment = require('./controller.new-comment');

module.exports = {
  signUpUser,
  signInUser,
  newPost,
  setCookies,
  newComment,
};

const signUp = require('./query.signup');
const checkUser = require('./query.check-user');
const getUserId = require('./query.get-user-id');
const getCommunityId = require('./query.get-community-id');
const getPassword = require('./query.get-password');
const newPost = require('./query.new-post');
const newComment = require('./query.new-comment');

module.exports = {
  signUp,
  checkUser,
  getUserId,
  getPassword,
  newPost,
  getCommunityId,
  newComment,
};

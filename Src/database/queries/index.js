const signUp = require('./query.signup');
const checkUser = require('./query.check-user');
const getUserId = require('./query.get-user-id');
const getCommunityId = require('./query.get-community-id');
const getPassword = require('./query.get-password');
const newPost = require('./query.new-post');
const newComment = require('./query.new-comment');
const getPostId = require('./query.get-post-id');
const newCommunity = require('./query.new-community');

module.exports = {
  signUp,
  checkUser,
  getUserId,
  getPassword,
  newPost,
  getCommunityId,
  newComment,
  getPostId,
  newCommunity,
};

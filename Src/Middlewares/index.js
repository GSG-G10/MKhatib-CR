const {
  hashPassword,
  comparePassword,
} = require('./middleware.password.process');
const getUserId = require('./middleware.get-user-id');
const getCommunityName = require('./middleware.get-community-id');
const getPostInfo = require('./midlleware.get-post-info');
const getPostId = require('./midlleware.get-post-id');

module.exports = {
  hashPassword,
  comparePassword,
  getUserId,
  getCommunityName,
  getPostInfo,
  getPostId,
};

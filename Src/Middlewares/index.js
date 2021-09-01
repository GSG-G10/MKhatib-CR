const {
  hashPassword,
  comparePassword,
} = require('./middleware.password.process');
const getUserId = require('./middleware.get-user-id');
const getCommunityName = require('./middleware.get-community-id');
const getPostInfo = require('./midlleware.get-post-info');
const getPostId = require('./midlleware.get-post-id');
const getTrendingNews = require('./midlleware.get-trending-news');
const verifyAuthentication = require('./midlleware.verify-authentication');

module.exports = {
  hashPassword,
  comparePassword,
  getUserId,
  getCommunityName,
  getPostInfo,
  getPostId,
  getTrendingNews,
  verifyAuthentication,
};
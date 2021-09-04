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
const getAvatar = require('./middleware.get-avatar');
const checkCommunities = require('./middleware.check-communities');
const getUserCommunityPosts = require('./middleware.get-user-community-posts');
const followCommunity = require('./middleware.follow-community');
const getSpecificPostsById = require('./middleware.get-specific-posts-by-id');
const getCommunitiesUserFollow = require('./middleware.get-communities-user-follow');

module.exports = {
  hashPassword,
  comparePassword,
  getUserId,
  getCommunityName,
  getPostInfo,
  getPostId,
  getTrendingNews,
  verifyAuthentication,
  getAvatar,
  checkCommunities,
  getUserCommunityPosts,
  followCommunity,
  getSpecificPostsById,
  getCommunitiesUserFollow,
};

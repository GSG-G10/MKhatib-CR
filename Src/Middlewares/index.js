const {
  hashPassword,
  comparePassword,
} = require('./middleware.password.process');
const getUserId = require('./middleware.get-user-id');
const getCommunityName = require('./middleware.get-community-id');

module.exports = {
  hashPassword,
  comparePassword,
  getUserId,
  getCommunityName,
};

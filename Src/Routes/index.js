const router = require('express').Router();

const {
  signUpUser,
  signInUser,
  newPost,
  setCookies,
  newComment,
  newCommunity,
  loginUser,
  signupUser,
  logoutUser,
  communities,
} = require('../Controllers');
const {
  getUserId,
  getCommunityName,
  getPostInfo,
  getPostId,
  getTrendingNews,
  verifyAuthentication,
  getAvatar,
  getUserCommunityPosts,
  followCommunity,
  getSpecificPostsById,
  getCommunitiesUserFollow,
} = require('../Middlewares');

router.post('/new-post', verifyAuthentication, getCommunityName, newPost, (req, res) => res.redirect('/'));
router.post('/new-comment', verifyAuthentication, getPostInfo, getPostId, newComment, (req, res) => res.json(req.body));
router.post('/new-community', verifyAuthentication, newCommunity, (req, res) => res.json(req.body));
router.post('/add-user', signUpUser);
router.post('/check-user', signInUser, getUserId, getAvatar, setCookies, (req, res) => res.redirect('/'));
router.post('/follow-community', followCommunity, getSpecificPostsById);
router.post('/trending-news', getTrendingNews);
router.get('/login', loginUser);
router.get('/communites', communities);
router.get('/signup', signupUser);
router.get('/logout', logoutUser);
router.get('/get-user-posts', getUserCommunityPosts);
router.get('/communities-Follows', getCommunitiesUserFollow);
module.exports = router;

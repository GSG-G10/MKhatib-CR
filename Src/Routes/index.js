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
} = require('../Controllers');
const {
  getUserId,
  getCommunityName,
  getPostInfo,
  getPostId,
  getTrendingNews,
} = require('../Middlewares');

router.post('/new-post', getCommunityName, newPost, (req, res) => res.json(req.body));
router.post('/new-comment', getPostInfo, getPostId, newComment, (req, res) => res.json(req.body));
router.post('/new-community', newCommunity, (req, res) => res.json(req.body));
router.post('/add-user', signUpUser);
router.post('/check-user', signInUser, getUserId, setCookies, (req, res) => res.redirect('/'));
router.post('/trending-news', getTrendingNews);
router.get('/login', loginUser);
router.get('/signup', signupUser);
router.get('/logout', logoutUser);
module.exports = router;

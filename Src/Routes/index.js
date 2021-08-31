const router = require('express').Router();

const {
  signUpUser,
  signInUser,
  newPost,
  setCookies,
  newComment,
  newCommunity,
} = require('../Controllers');
const {
  getUserId,
  getCommunityName,
  getPostInfo,
  getPostId,
} = require('../Middlewares');

router.post('/add-user', signUpUser);
router.post('/check-user', signInUser, getUserId, setCookies, (req, res) => res.redirect('/'));
router.post('/new-post', getCommunityName, newPost, (req, res) => res.json(req.body));
router.post('/new-comment', getPostInfo, getPostId, newComment, (req, res) => res.json(req.body));
router.post('/new-community', newCommunity, (req, res) => res.json(req.body));
module.exports = router;

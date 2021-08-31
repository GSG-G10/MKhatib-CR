const router = require('express').Router();

const {
  signUpUser,
  signInUser,
  newPost,
  setCookies,
} = require('../Controllers');
const {
  getUserId,
  getCommunityName,
} = require('../Middlewares');

router.post('/add-user', signUpUser);
router.post('/check-user', signInUser, getUserId, setCookies, (req, res) => res.redirect('/'));
router.post('/new-post', getCommunityName, newPost, (req, res) => res.json(req.body));
router.get('/worng-login', () => {
});
module.exports = router;

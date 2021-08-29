const router = require('express').Router();

const {
  signUpUser,
  signInUser,
} = require('../Controllers');

router.post('/add-user', signUpUser);
router.post('/check-user', signInUser);
router.get('/worng-login', () => {
});
module.exports = router;

const router = require('express').Router();

const {
  signUpUser,
} = require('../Controllers');

router.post('/add-user', signUpUser);

module.exports = router;

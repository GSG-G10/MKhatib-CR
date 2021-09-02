const { join } = require('path');

module.exports = ((req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.sendFile(join(__dirname, '..', '..', 'Public', 'signup.html'));
  }
  return res.redirect('/');
});

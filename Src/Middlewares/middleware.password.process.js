const { hash, compare } = require('bcryptjs');

const hashPassword = (password) => hash(password, 10);
const comparePassword = (password, hashedPassword) => compare(password, hashedPassword);
module.exports = {
  hashPassword,
  comparePassword,
};

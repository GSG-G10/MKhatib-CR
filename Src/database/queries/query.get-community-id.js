const connection = require('../connection');

module.exports = (communityName) => connection.query('SELECT id FROM communities where community_name= $1', [communityName]);

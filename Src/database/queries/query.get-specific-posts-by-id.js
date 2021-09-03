const connection = require('../connection');

module.exports = (communityId) => connection.query(
  `SELECT
    users.username, communities.community_name,users.avatar, community_posts.post_title,
    community_posts.content_type,community_posts.content, community_posts.post_date,
    community_posts.flair_name,
    community_posts.post_votes
    From users
    JOIN
    community_posts
    ON
    community_posts.owner_id = users.id
    JOIN 
    communities
    ON 
    communities.id = community_posts.community_id
    WHERE
    community_id = $1`, [communityId],

);

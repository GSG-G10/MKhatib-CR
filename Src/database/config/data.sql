BEGIN;
DROP TABLE IF EXISTS users,
communities,
community_members,
community_posts,
post_comments CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    avatar TEXT default 'https://robohash.org/consequaturmollitiaqui.png?size=50x50&set=set1 ',
    password TEXT NOT NULL
);

CREATE TABLE communities (
    id SERIAL PRIMARY KEY,
    community_name VARCHAR(255) UNIQUE NOT NULL
);
CREATE TABLE community_members (
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
    community_id INTEGER REFERENCES communities(id) ON UPDATE CASCADE
);
CREATE TABLE community_posts (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
    community_id INTEGER REFERENCES communities(id) ON UPDATE CASCADE,
    post_title VARCHAR(255) NOT NULL,
    content_type VARCHAR(255),
    content TEXT NOT NULL,
    post_date TEXT NOT NULL,
    flair_name VARCHAR(255),
    post_votes INTEGER default 0
);
CREATE TABLE post_comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
    post_id INTEGER REFERENCES community_posts(id) ON UPDATE CASCADE,
    content TEXT NOT NULL,
    comment_date DATE NOT NULL,
    comment_votes INTEGER default 0
);
COMMIT;
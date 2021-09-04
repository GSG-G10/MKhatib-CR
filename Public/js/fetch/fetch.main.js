/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const getUserPosts = () => {
  fetch('/get-user-posts')
    .then((response) => response.json())
    .then((posts) => postBuilder(posts));
};
const getCommunitiesUserFollow = () => {
  fetch('/communities-Follows')
    .then((response) => response.json())
    .then((data) => modalCommunities(data));
};

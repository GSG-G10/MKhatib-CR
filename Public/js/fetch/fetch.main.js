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
const newPost = (communityName, postTitle, content, postDate, flairName) => {
  fetch('/new-post', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      communityName,
      postTitle,
      content,
      postDate,
      flairName,
    }),
  })
    .then((response) => {
      if (response.ok && response.redirected) {
        window.location.href = response.url;
      }
    });
};

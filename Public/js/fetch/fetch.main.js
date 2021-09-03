/* eslint-disable no-unused-vars */
const getUserPosts = () => {
  fetch('/get-user-posts')
    .then((response) => response.json())
    .then((posts) => console.log(posts));
};

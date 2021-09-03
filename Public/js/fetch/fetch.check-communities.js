/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const fetchCommunities = () => {
  fetch('/check-communities')
    .then((res) => res.json())
    .then((data) => data)
    .then(console.log);
};

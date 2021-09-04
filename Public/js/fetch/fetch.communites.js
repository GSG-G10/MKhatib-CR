/* eslint-disable no-unused-vars */
const communities = (() => {
  console.log('communities');
  fetch('/get-communities')
    .then((response) => console.log(response));
})();

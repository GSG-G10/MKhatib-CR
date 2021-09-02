const postContent = document.querySelectorAll('.post-content');
const loginButton = document.querySelector('.auth-login');
const signupButton = document.querySelector('.auth-signup');
const logoutButton = document.querySelector('.auth-logout');
const topTrendingSection = document.querySelector('.top-trending');
const joinButton = document.querySelectorAll('.join-button');

postContent.forEach((element) => {
  const postChildren = element.children;
  const arrayOfChildes = Object.keys(postChildren);
  arrayOfChildes.forEach((child) => {
    postChildren[child].setAttribute('width', '100%');
    postChildren[child].setAttribute('height', 'auto');
  });
});

// eslint-disable-next-line no-unused-vars
const visitor = () => {
  logoutButton.style.display = 'none';
};
// eslint-disable-next-line no-unused-vars
const user = () => {
  loginButton.style.display = 'none';
  signupButton.style.display = 'none';
  topTrendingSection.style.display = 'none';
  // eslint-disable-next-line no-return-assign
  joinButton.forEach((e) => e.style.display = 'none');
};

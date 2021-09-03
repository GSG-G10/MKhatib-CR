/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
const postContent = document.querySelectorAll('.post-content');
const joinButton = document.querySelectorAll('.join-button');
const loginButton = document.querySelector('.auth-login');
const signupButton = document.querySelector('.auth-signup');
const logoutButton = document.querySelector('.auth-logout');
const topTrendingSection = document.querySelector('.top-trending');
const newPostSection = document.querySelector('.new-post-section');
const newPostModal = document.querySelector('.new-post-modal');
const modalClose = document.querySelector('.modal-close');
const typePostText = document.querySelector('.type-post-text');
const typePostPV = document.querySelector('.type-post-pv');
const typePostLink = document.querySelector('.type-post-link');
const modalPostArea = document.querySelector('.modal-post-area');

postContent.forEach((element) => {
  const postChildren = element.children;
  const arrayOfChildes = Object.keys(postChildren);
  arrayOfChildes.forEach((child) => {
    postChildren[child].setAttribute('width', '100%');
    postChildren[child].setAttribute('height', 'auto');
  });
});

const visitor = () => {
  logoutButton.style.display = 'none';
  newPostSection.style.display = 'none';
  newPostModal.style.display = 'none';

};
const user = () => {
  loginButton.style.display = 'none';
  signupButton.style.display = 'none';
  topTrendingSection.style.display = 'none';
  joinButton.forEach((e) => e.style.display = 'none');
};
newPostSection.addEventListener('click', () => {
  newPostSection.classList.remove('show');
  newPostSection.classList.add('hidde');

  newPostModal.classList.remove('hidde');
  newPostModal.classList.add('show');
});
modalClose.addEventListener('click', () => {
  newPostModal.classList.remove('show');
  newPostModal.classList.add('hidde');
  newPostSection.classList.remove('hidde');
  newPostSection.classList.add('show');
});
typePostText.addEventListener('click', () => {
  modalPostArea.classList.remove('active');
  modalPostArea.textContent = '';
  modalPostArea.placeholder = 'Type Your Post';
});
typePostPV.addEventListener('click', () => {
  modalPostArea.classList.add('active');
  modalPostArea.textContent = '';
  modalPostArea.placeholder = 'Enter Your Photo or Video Link';
});
typePostLink.addEventListener('click', () => {
  modalPostArea.classList.add('active');
  modalPostArea.textContent = '';
  modalPostArea.placeholder = 'Enter Your link';
});

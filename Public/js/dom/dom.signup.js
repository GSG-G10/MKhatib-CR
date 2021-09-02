/* eslint-disable no-unused-vars */
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const submitBtn = document.querySelector('#signupSubmit');
const signupStatus = document.querySelector('.signup-status');

const signupError = (data) => {
  signupStatus.textContent = data;
};

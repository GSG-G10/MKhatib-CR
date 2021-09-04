/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
// const postContent = document.querySelectorAll('.post-content');
// const joinButton = document.querySelectorAll('.join-button');
const loginButton = document.querySelector('.auth-login');
const signupButton = document.querySelector('.auth-signup');
const logoutButton = document.querySelector('.auth-logout');
const topTrendingSection = document.querySelector('.top-trending');
const typePostText = document.querySelector('.type-post-text');
const typePostPV = document.querySelector('.type-post-pv');
const typePostLink = document.querySelector('.type-post-link');
const postsContainer = document.querySelector('.posts-container');
const comunitySelector = document.querySelector('#comunityName');
// modal
const newPostSection = document.querySelector('.new-post-section');
const newPostModal = document.querySelector('.new-post-modal');
const modalClose = document.querySelector('.modal-close');
const modalSendPostBtn = document.querySelector('.modal-send-post');
const modalPostArea = document.querySelector('.modal-post-area');
const modalCommunitiesSelector = document.querySelector('.modal-header-communities');
const modalCommunitiesOption = document.querySelector('.modal-header-communities-option');
const modalPostTitle = document.querySelector('.modal-post-title');
const modalPostFlairName = document.querySelector('.modal-post-flair-name');

const visitor = () => {
  logoutButton.style.display = 'none';
  newPostSection.style.display = 'none';
  newPostModal.style.display = 'none';
};
const user = () => {
  loginButton.style.display = 'none';
  signupButton.style.display = 'none';
  topTrendingSection.style.display = 'none';
  newPostSection.style.display = 'flex';
  newPostModal.style.display = 'flex';
};

const postBuilder = (array) => {
  const posts = array.reverse();
  array.forEach((element) => {
    // Create Elements
    const createPostCard = document.createElement('div');
    postsContainer.appendChild(createPostCard);
    const createPostHeader = document.createElement('div');
    const postHeaderTitle = document.createElement('div');
    const postHeaderUserAvatar = document.createElement('div');
    const avatarImage = document.createElement('img');
    const communityName = document.createElement('a');
    const ownerName = document.createElement('a');
    const Postdate = document.createElement('span');
    const postTitleBox = document.createElement('div');
    const postTitle = document.createElement('h3');
    const postContent = document.createElement('div');
    const joinButton = document.createElement('a');
    const joinButtonIcon = document.createElement('i');
    const postVotesBox = document.createElement('div');
    const postVotesUp = document.createElement('span');
    const postVotesStatus = document.createElement('span');
    const postVotesDown = document.createElement('span');
    const voteIconUp = document.createElement('i');
    const voteIconDown = document.createElement('i');

    // Set Classes

    createPostCard.classList.add('post-card');
    createPostCard.id = element.id;
    createPostHeader.classList.add('post-header');
    postHeaderTitle.classList.add('post-header-title');
    postHeaderUserAvatar.classList.add('user-avatar');
    avatarImage.classList.add('user-avatar-src');
    communityName.classList.add('post-info-community-name');
    ownerName.classList.add('post-info-owner-name');
    Postdate.classList.add('post-info-date');
    joinButton.classList.add('join-button');
    postTitle.classList.add('post-title');
    postContent.classList.add('post-content');
    joinButtonIcon.classList.add('fas', 'fa-plus');
    postTitleBox.classList.add('post-title-box');
    postVotesBox.classList.add('post-votes');
    postVotesUp.classList.add('post-votes-up');
    postVotesStatus.classList.add('post-votes-status');
    postVotesDown.classList.add('post-votes-down');
    voteIconUp.classList.add('far', 'fa-arrow-alt-circle-up');
    voteIconDown.classList.add('far', 'fa-arrow-alt-circle-down');
    // Elements Content

    avatarImage.src = element.avatar;
    communityName.href = `/r?${element.community_name}`;
    communityName.textContent = `r/${element.community_name}`;
    ownerName.textContent = element.username;
    ownerName.href = `/u?${element.username}`;
    Postdate.textContent = element.post_date;
    joinButton.textContent = 'Join';
    joinButton.href = '/signup';
    postTitle.textContent = element.post_title;
    postContent.textContent = element.content;
    postVotesStatus.textContent = element.post_votes;
    // AppendChilds

    createPostCard.appendChild(createPostHeader);
    createPostHeader.appendChild(postHeaderTitle);
    postHeaderTitle.appendChild(postHeaderUserAvatar);
    postHeaderUserAvatar.appendChild(avatarImage);
    postHeaderTitle.appendChild(communityName);
    postHeaderTitle.appendChild(ownerName);
    postHeaderTitle.appendChild(Postdate);
    createPostCard.appendChild(postTitleBox);
    createPostHeader.appendChild(joinButton);
    joinButton.appendChild(joinButtonIcon);
    postTitleBox.appendChild(postTitle);
    postTitleBox.appendChild(postVotesBox);
    postVotesBox.appendChild(postVotesUp);
    postVotesBox.appendChild(postVotesStatus);
    postVotesBox.appendChild(postVotesDown);
    createPostCard.appendChild(postContent);
    createPostHeader.appendChild(joinButton);
    postVotesUp.appendChild(voteIconUp);
    postVotesDown.appendChild(voteIconDown);
    // Conditions
    // const postContentVideo = document.createElement('video');
  });
};

const modalCommunities = (data) => {
  data.forEach((element) => {
    const selectorOption = document.createElement('option');
    selectorOption.value = element.community_name;
    selectorOption.textContent = element.community_name;
    selectorOption.classList.add('modal-header-communities-option');
    comunitySelector.appendChild(selectorOption);
  });
};
// Show Modal
newPostSection.addEventListener('click', () => {
  newPostSection.classList.remove('show');
  newPostSection.classList.add('hidde');

  newPostModal.classList.remove('hidde');
  newPostModal.classList.add('show');
});
// Close Modal
modalClose.addEventListener('click', () => {
  newPostModal.classList.remove('show');
  newPostModal.classList.add('hidde');
  newPostSection.classList.remove('hidde');
  newPostSection.classList.add('show');
});
// Type of post
typePostText.addEventListener('click', () => {
  typePostText.classList.add('active');
  modalPostArea.id = 'text';
  modalPostTitle.placeholder = 'Type Your Title';
  typePostPV.classList.remove('active');
  typePostLink.classList.remove('active');
  modalPostTitle.value = '';
  modalPostArea.value = '';
});
typePostPV.addEventListener('click', () => {
  typePostPV.classList.add('active');
  modalPostArea.id = 'url';
  modalPostTitle.placeholder = 'The Photo or Video Title';
  modalPostArea.placeholder = 'Enter Your Photo or Video Link';
  typePostText.classList.remove('active');
  typePostLink.classList.remove('active');
  modalPostTitle.value = '';
  modalPostArea.value = '';
});
typePostLink.addEventListener('click', () => {
  typePostLink.classList.add('active');
  modalPostArea.id = 'link';
  modalPostTitle.placeholder = 'Enter Your link';
  typePostText.classList.remove('active');
  typePostPV.classList.remove('active');
  modalPostTitle.value = '';
  modalPostArea.value = '';
});

const testImage = () => {
  document.getElementById('image').src = document.getElementById('url').value;
};

const errorCallback = () => {
  alert('Image did not exist');
};

const loadCallback = () => {
  const postDate = getDate();
  newPost(
    modalCommunitiesSelector.value,
    modalPostTitle.value,
    modalPostArea.value,
    postDate,
    modalPostFlairName.value,
  );
  console.log('Image is exist');
};

modalSendPostBtn.addEventListener('click', () => {
  const postDate = getDate();
  if (typePostText.classList.contains('active')
   || typePostLink.classList.contains('active')) {
    newPost(
      modalCommunitiesSelector.value,
      modalPostTitle.value,
      modalPostArea.value,
      postDate,
      modalPostFlairName.value,
    );
  } else if (typePostPV.classList.contains('active')) {
    testImage();
  } else {
    newPost(
      modalCommunitiesSelector.value,
      modalPostTitle.value,
      modalPostArea.value,
      postDate,
      modalPostFlairName.value,
    );
  }
});

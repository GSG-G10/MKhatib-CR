const postContent = document.querySelectorAll('.post-content');
postContent.forEach((element) => {
  const postChildren = element.children;
  const arrayOfChildes = Object.keys(postChildren);
  arrayOfChildes.forEach((child) => {
    postChildren[child].setAttribute('width', '100%');
    postChildren[child].setAttribute('height', 'auto');
  });
});

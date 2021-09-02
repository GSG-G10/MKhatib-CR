/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
submitBtn.addEventListener('click', () => {
  fetch('/check-user', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  })
    .then((res) => {
      if (res.ok && res.redirected) {
        window.location.href = res.url;
      } else if (res.status === 401) {
        res.json()
          .then((response) => authenticationError(response));
      }
    });
});

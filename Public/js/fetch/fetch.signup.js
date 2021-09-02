/* eslint-disable no-undef */
submitBtn.addEventListener('click', () => {
  if (confirmation(password.value, confirmPassword.value)) {
    const requestBody = {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    };
    fetch('/add-user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (res.ok && res.redirected) {
          window.location.href = res.url;
        } else {
          res.json()
            .then((response) => signupError(response));
        }
      });
  } else {
    signupStatus.textContent = 'Please Confirm Your Password';
  }
});

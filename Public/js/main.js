/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const getCookie = (name) => {
  const cookie = {};
  document.cookie.split(';').forEach((el) => {
    const [k, v] = el.split('=');
    cookie[k.trim()] = v;
  });
  return cookie[name];
};
const parseToken = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));

  return JSON.parse(jsonPayload);
};

const autoCheckLogin = (() => {
  if (getCookie('token')) {
    user();
    const userInfo = parseToken(getCookie('token'));
  } else {
    visitor();
  }
})();

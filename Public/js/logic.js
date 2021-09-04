/* eslint-disable no-unused-vars */
const confirmation = (a, b) => {
  if (a === b) { return true; } return false;
};
const getDate = () => {
  const date = new Date();
  const refactorDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return refactorDate;
};

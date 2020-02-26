const isPasswordValid = password => {
  const passwordRegex = /^[a-zA-Z0-9]{3,30}$/;
  return passwordRegex.test(password);
};
export default isPasswordValid;

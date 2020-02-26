const isEmailValid = email => {
  const emailRegex = /.+\@.+\..+/;
  return emailRegex.test(email);
};

export default isEmailValid;

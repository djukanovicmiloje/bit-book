const parseLoginError = message => {
  let errorMessage;
  if (message === "Passwords do not match.") {
    errorMessage = "Wrong password!";
  } else if (message.split(" ")[0] === "User") {
    errorMessage = "No user with that email!";
  } else if (message.split(" ")[0] === "child") {
    errorMessage = "Invalid email!";
  }
  return errorMessage;
};

export default parseLoginError;

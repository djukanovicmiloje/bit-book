const getLoggedInUser = users => {
  const loggedInUsersId = parseInt(localStorage.getItem("id"));

  return users.filter(user => user.id === loggedInUsersId)[0];
};

export default getLoggedInUser;

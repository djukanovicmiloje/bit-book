const storeAccessToken = accessToken => {
  localStorage.setItem("accessToken", accessToken);
};

export default storeAccessToken;

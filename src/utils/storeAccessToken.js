import jwtDecode from "jwt-decode";

const storeAccessToken = accessToken => {
  localStorage.setItem("accessToken", accessToken);

  const userInfo = jwtDecode(accessToken);
  localStorage.setItem("id", JSON.stringify(userInfo.id));
};

export default storeAccessToken;

import { requestHeaders } from "../shared/constants";
import API from "../shared/API";
import parseLoginError from "../utils/parseLoginError";

const loginRequest = loginData =>
  API.post("auth/login", requestHeaders, loginData).then(data => {
    const accessToken = data.accessToken;
    if (accessToken) {
      return {
        successful: true,
        accessToken: accessToken
      };
    }
    return {
      successful: false,
      message: parseLoginError(data.message)
    };
  });

export default loginRequest;

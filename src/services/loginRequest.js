import { requestHeaders } from "../shared/constants";
import API from "./API";

const loginRequest = loginData =>
  API.post("auth/login", requestHeaders, loginData);

export default loginRequest;

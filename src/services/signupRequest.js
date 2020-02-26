import { requestHeaders } from "../shared/constants";
import API from "../shared/API";

const signUpRequest = signUpData =>
  API.post("auth/register", requestHeaders, signUpData);

export default signUpRequest;

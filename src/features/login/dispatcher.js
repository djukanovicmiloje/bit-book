import { setLoginError, setLoginPending, setLoginSuccess } from "./creators";
import loginRequest from "../../services/loginRequest";
import storeAccessToken from "../../utils/storeAccessToken";

const loginDispatcher = loginData => dispatch => {
  dispatch(setLoginPending(true));
  dispatch(setLoginSuccess(false));
  dispatch(setLoginError(null));

  loginRequest(loginData).then(loginStatus => {
    dispatch(setLoginPending(false));
    if (loginStatus.successful) {
      storeAccessToken(loginStatus.accessToken);
      dispatch(setLoginSuccess(true));
    } else {
      dispatch(setLoginError(loginStatus.message));
    }
  });
};

export default loginDispatcher;

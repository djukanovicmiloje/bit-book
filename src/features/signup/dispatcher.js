import { setSignUpError, setSignUpPending, setSignUpSuccess } from "./creators";
import signUpRequest from "../../services/signupRequest";
import storeAccessToken from "../../utils/storeAccessToken";

const signUpDispatcher = signUpData => dispatch => {
  dispatch(setSignUpPending(true));
  signUpRequest(signUpData)
    .then(data => {
      dispatch(setSignUpPending(false));
      if (data.accessToken) {
        storeAccessToken(data.accessToken);
        dispatch(setSignUpSuccess(true));
      } else {
        dispatch(setSignUpError(data));
      }
    })
    .catch(error => {
      dispatch(setSignUpError(error));
      dispatch(setSignUpPending(false));
    });
};

export default signUpDispatcher;

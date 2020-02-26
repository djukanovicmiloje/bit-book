import loginReducer from "./login/reducer";
import { combineReducers } from "redux";
import signUpReducer from "./signup/reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer
});

export default rootReducer;

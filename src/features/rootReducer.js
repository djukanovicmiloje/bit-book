import loginReducer from "./login/reducer";
import { combineReducers } from "redux";
import signUpReducer from "./signup/reducer";
import postsDispatcher from "./posts/dispatcher";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  posts: postsDispatcher
});

export default rootReducer;

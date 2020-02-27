import { combineReducers } from "redux";

import loginReducer from "./login/reducer";
import signUpReducer from "./signup/reducer";
import postsDispatcher from "./posts/dispatcher";
import usersReducer from "./users/reducer";
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  posts: postsDispatcher,
  users: usersReducer,
  comments: commentsReducer
});

export default rootReducer;

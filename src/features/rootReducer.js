import { combineReducers } from "redux";

import loginReducer from "./login/reducer";
import signUpReducer from "./signup/reducer";
import postsReducer from "./posts/reducer";
import usersReducer from "./users/reducer";
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer
});

export default rootReducer;

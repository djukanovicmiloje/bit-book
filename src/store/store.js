import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../features/rootReducer";

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;

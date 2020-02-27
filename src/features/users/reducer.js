import {
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_FETCHED,
  SET_LOGGED_IN_USER
} from "./types";

const usersReducer = (
  state = {
    areUsersFetched: false,
    users: [],
    error: null,
    loggedInUser: null
  },
  action
) => {
  switch (action.type) {
    case SET_USERS_FETCHED:
      return {
        ...state,
        areUsersFetched: action.areUsersFetched
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users
      };

    case SET_USERS_ERROR:
      return {
        ...state,
        error: action.error
      };
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        loggedInUser: action.loggedInUser
      };

    default:
      return state;
  }
};

export default usersReducer;

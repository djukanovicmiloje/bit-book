import {
  SET_USERS_FETCHED,
  SET_USERS,
  SET_USERS_ERROR,
  SET_LOGGED_IN_USER
} from "./types";

export const setUsersFetched = areUsersFetched => ({
  type: SET_USERS_FETCHED,
  areUsersFetched
});

export const setUsers = users => ({
  type: SET_USERS,
  users
});

export const setUsersError = error => ({
  type: SET_USERS_ERROR,
  error
});

export const setLoggedInUser = loggedInUser => ({
  type: SET_LOGGED_IN_USER,
  loggedInUser
});

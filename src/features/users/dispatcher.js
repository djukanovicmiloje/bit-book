import {
  setUsers,
  setUsersError,
  setUsersFetched,
  setLoggedInUser
} from "./creators";
import fetchUsers from "../../services/fetchUsers";
import getLoggedInUser from "../../utils/getLoggedInUser";

const usersDispatcher = () => dispatch => {
  fetchUsers()
    .then(users => {
      dispatch(setUsers(users));
      dispatch(setUsersFetched(true));
      dispatch(setLoggedInUser(getLoggedInUser(users)));
    })
    .catch(error => {
      dispatch(setUsersError(error));
      dispatch(setUsersFetched(false));
    });
};

export default usersDispatcher;

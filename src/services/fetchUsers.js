import API from "../shared/API";
import { requestHeaders } from "../shared/constants";
import User from "../entities/user";

const fetchUsers = () =>
  API.get("posts", requestHeaders).then(usersData =>
    usersData.map(userData => new User(userData))
  );

export default fetchUsers;

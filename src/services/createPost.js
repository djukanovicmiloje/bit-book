import API from "../shared/API";
import { requestHeaders, URL } from "../shared/constants";

requestHeaders.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;

const createPost = postData => API.post("posts", requestHeaders, postData);

export default createPost;

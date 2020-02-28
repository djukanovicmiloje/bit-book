import API from "../shared/API";
import { requestHeaders, URL } from "../shared/constants";

requestHeaders.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;

const createPost = postData =>
  fetch(URL, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(postData)
  }).then(res => res.json());

export default createPost;

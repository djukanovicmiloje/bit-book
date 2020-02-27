import API from "../shared/API";
import { requestHeaders } from "../shared/constants";
import Post from "../entities/post";

const fetchPosts = () =>
  API.get("posts", requestHeaders).then(postsData =>
    postsData.map(postData => new Post(postData))
  );

export default fetchPosts;

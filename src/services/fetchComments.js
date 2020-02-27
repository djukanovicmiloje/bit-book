import API from "../shared/API";
import { requestHeaders } from "../shared/constants";
import Comment from "../entities/comment";

const fetchComments = () =>
  API.get("comments", requestHeaders).then(commentsData =>
    commentsData.map(commentData => new Comment(commentData))
  );

export default fetchComments;

import {
  setPostCreationPending,
  setPostCreationSuccess,
  setPostCreationError
} from "./creators";
import { addPost } from "../posts/creators";
import createPost from "../../services/createPost";

const createPostDispatcher = postData => dispatch => {
  dispatch(setPostCreationPending(true));

  createPost(postData)
    .then(post => {
      dispatch(setPostCreationPending(false));
      dispatch(setPostCreationSuccess(post));
      dispatch(addPost(post));
    })
    .catch(error => {
      dispatch(setPostCreationError(error));
    });
};

export default createPostDispatcher;

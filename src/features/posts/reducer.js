import { SET_POSTS, SET_POSTS_ERROR, SET_POSTS_FETCHED } from "./types";

const postsReducer = (
  state = {
    arePostsFetched: false,
    posts: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case SET_POSTS_FETCHED:
      return {
        ...state,
        arePostsFetched: action.arePostsFetched
      };

    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      };

    case SET_POSTS_ERROR:
      return {
        ...state,
        error: action.error
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat([action.post])
      };

    default:
      return state;
  }
};

export default postsReducer;

import React, { Component } from "react";
import HeaderLoggedIn from "../components/HeaderLoggedIn/HeaderLoggedIn";
import postsDispatcher from "../../features/posts/dispatcher";
import usersDispatcher from "../../features/users/dispatcher";
import commentsDispatcher from "../../features/comments/dispatcher";
import { connect } from "react-redux";
import Post from "../components/Post/Post";

class PostsPage extends Component {
  componentDidMount() {
    if (!this.props.isDataFetched) {
      this.props.fetchData();
    }
  }

  render() {
    if (!this.props.isDataFetched) {
      return <div>Loading</div>;
    }
    //fileter out foobar
    const postsToDisplay = this.props.posts.filter((post, index) => index > 36);

    return (
      <React.Fragment>
        <HeaderLoggedIn />
        <div className="posts_container">
          {postsToDisplay.map(post => (
            <Post post={post} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isDataFetched:
    state.posts.arePostsFetched &&
    state.users.areUsersFetched &&
    state.comments.areCommentsFetched,
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(postsDispatcher());
    dispatch(commentsDispatcher());
    dispatch(usersDispatcher());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);

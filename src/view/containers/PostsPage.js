import React, { Component } from "react";
import HeaderLoggedIn from "../components/HeaderLoggedIn/HeaderLoggedIn";
import postsDispatcher from "../../features/posts/dispatcher";
import usersDispatcher from "../../features/users/dispatcher";
import commentsDispatcher from "../../features/comments/dispatcher";
import { connect } from "react-redux";

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
    return (
      <React.Fragment>
        <HeaderLoggedIn />
        {this.props.posts.map(post => (
          <p>{post.text}</p>
        ))}
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

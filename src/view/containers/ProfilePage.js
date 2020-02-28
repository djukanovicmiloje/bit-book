import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../components/Post/Post";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    const userId = this.props.match.params.id;
    console.log(userId);
    console.log(props.posts);
    this.posts = props.posts.filter(post => post.userId == userId);
    console.log(this.posts);
  }

  render() {
    return this.posts.map(post => <Post post={post} />);
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps)(ProfilePage);

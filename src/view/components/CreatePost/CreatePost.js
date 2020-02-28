import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./CreatePost.scss";
import createPostDispatcher from "../../../features/createPost/dispatcher";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "text"
    };
  }

  onIncludeImageClick() {
    let newType;
    if (this.state.type === "text") {
      newType = "image";
    } else {
      newType = "text";
    }
    this.setState({
      type: newType
    });
  }

  onInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  onPostClick() {
    const { text, imageUrl } = this.state;

    const postData = {
      title: "001",
      subtitle: "testing",
      imageUrl,
      text,
      isPublic: true
    };

    this.props.createPost(postData);
  }

  render() {
    return (
      <div className="create_post">
        <h3>{`Welcome ${this.props.user.getName()}!`}</h3>
        <input
          name="text"
          className="new_post"
          type="text"
          placeholder="Make a post"
          onChange={e => this.onInputChange(e)}
        />
        <label>
          Include an image:
          <input type="checkbox" onClick={() => this.onIncludeImageClick()} />
        </label>
        <input
          className={this.state.type}
          type="text"
          disabled={false}
          placeholder="Enter an image URL"
          name="imageUrl"
          onChange={e => this.onInputChange(e)}
        />
        <button onClick={() => this.onPostClick()}>POST</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.loggedInUser
});

const mapDispatchToProps = dispatch => ({
  createPost: postData => dispatch(createPostDispatcher(postData))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);

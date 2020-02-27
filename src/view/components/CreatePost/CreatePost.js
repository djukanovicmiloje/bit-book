import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./CreatePost.scss";

const CreatePost = ({ user }) => (
  <div className="create_post">
    <h3>{`Welcome ${user.getName()}!`}</h3>
    <Link to="/new">
      <div>Create a post</div>
    </Link>
  </div>
);

const mapStateToProps = state => ({
  user: state.users.loggedInUser
});

export default connect(mapStateToProps)(CreatePost);

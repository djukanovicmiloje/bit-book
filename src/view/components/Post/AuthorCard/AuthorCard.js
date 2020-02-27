import React from "react";
import { connect } from "react-redux";

import "./AuthorCard.scss";
import { Link } from "react-router-dom";

const AuthorCard = props => {
  const author = props.post.getAuthor(props.users);

  return (
    <div className="author_card">
      <img src={author.avatar} alt="" />
      <div>
        <Link to="/profile">{author.getName()}</Link>
        <p>{props.post.getTimeStamp()}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps)(AuthorCard);

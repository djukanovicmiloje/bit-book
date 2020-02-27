import React from "react";
import { connect } from "react-redux";

const AuthorCard = props => {
  const author = props.post.getAuthor(props.users);
  console.log(author);
  return (
    <div>
      <p>{author.firstName}</p>
      <p>{props.post.getTimeStamp()}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps)(AuthorCard);

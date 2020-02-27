import React from "react";
import "./PostCard.scss";

const PostCard = ({ post }) => (
  <div className="post_card">
    <p>{post.text}</p>
    <img src={post.imageUrl} alt="" />
  </div>
);

export default PostCard;

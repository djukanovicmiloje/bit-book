import React from "react";
import PostCard from "./PostCard/PostCard";
import AuthorCard from "./AuthorCard/AuthorCard";

//ovo treba da vratri user card(profil usera i kada je kreijarano)
//post slika naslov ....
//komentar jedan ispod drugog zajedno sa userom koji je naspisao
// make new comment deo
const Post = ({ post }) => (
  <React.Fragment>
    <AuthorCard post={post} />
    <PostCard post={post} />
  </React.Fragment>
);

export default Post;

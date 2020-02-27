class Comment {
  constructor(commentData) {
    this.id = commentData.id;
    this.postId = commentData.postId;
    this.userId = commentData.userId;
    this.createdAt = commentData.createdAt;
    this.body = commentData.body;
  }
}

export default Comment;

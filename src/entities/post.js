class Post {
  constructor(postData) {
    this.id = postData.id;
    this.title = postData.title;
    this.subtitle = postData.subtitle;
    this.text = postData.text;
    this.userId = postData.userId;
    this.createdAt = postData.createdAt;
    this.imageUrl = postData.imageUrl;
  }
}

export default Post;

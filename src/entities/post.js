import parseUTCstring from "../utils/parseUTCstring";

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
  getAuthor(users) {
    return users.filter(user => user.id === this.userId)[0];
  }
  getTimeStamp() {
    const date = parseUTCstring(this.createdAt);
    return `${date.hour}:${date.minute} ${date.day}.${date.month}.${date.year}`;
  }
}

export default Post;

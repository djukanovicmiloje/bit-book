class User {
  constructor(userData) {
    this.firstName = userData.name.first;
    this.lastName = userData.name.last;
    this.id = userData.id;
    this.email = userData.email;
    this.createdAt = userData.createdAt;
    this.avatar =
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F08%2F08%2F09%2F17%2Favatar-1577909__340.png&f=1&nofb=1";
  }
  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default User;

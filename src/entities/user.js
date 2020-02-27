class User {
  constructor(userData) {
    this.firstName = userData.name.first;
    this.lastName = userData.name.last;
    this.id = userData.id;
    this.email = userData.email;
    this.createdAt = userData.createdAt;
  }
  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default User;

class User {
  constructor(userData) {
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.id = userData.id;
    this.email = userData.email;
    this.createdAt = userData.createdAt;
  }
}

export default User;

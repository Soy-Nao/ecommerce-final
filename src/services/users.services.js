const { Users, Cart } = require("../models");

class UserService {
  static async createUser(userData) {
    try {
      const { email } = userData;
      const existingUser = await Users.findOne({ where: {email} });
      if (existingUser) {
        throw Error('A user already exists with this email address.');
      }
      const user = await Users.create(userData);
      await Cart.create({
        totalPrice: 0,
        userId: user.id,
      });
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        password: user.password,
      };
    } catch (error) {
      throw error;
    }
  }

  static async getUser(userId) {
    try {
      const user = await Users.findOne({
        where: { id: userId },
        attributes: ["id", "username", "email"],
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;

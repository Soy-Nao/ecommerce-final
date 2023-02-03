const { Users, Cart } = require("../models");


class UserServices {
  static async createUser(user) {
    try {
      
      const result = await Users.create(user);
      
      const createCart = await Cart.create({
        totalPrice: 0,
        userId: result.id
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["id", "username", "email"]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
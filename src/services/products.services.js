const { Sequelize } = require("sequelize");
const { Users, Products,  } = require("../models");

class ProductsServices {

  static async getProdAll() {
    try {
        const result = await Products.findAll({
          where: {
            available_qty: {
              [Sequelize.Op.gt]: 0,
            },
          },
          attributes: {
            exclude: ["userId", "user_id"]
          },
          include: [
            {
              model: Users,
              as: "user",
              attributes: ["id", "username"]
            }
          ]
        });
        return result;
    } catch (error) {
        throw(error); 
    }
  }
  static async getProd(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["username"],
        include: [
          {
            model: Products,
            as: "products",
            attributes: {
              exclude: ["userId", "user_id"]
            },
            
          },
        ]
      });
      return result;
    } catch (error) {
        throw(error); 
    }
  }
  static async createProd(id, body) {
    try {
      const result = await Products.create({...body, userId: id});
      return result;
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = ProductsServices;
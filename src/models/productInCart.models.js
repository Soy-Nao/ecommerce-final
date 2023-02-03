const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_cart:
 *       type: object
 *       properties:
 *         quantity:
 *           type: number
 *           example: 3
 *         price:
 *           type: number
 *           example: 12000
 *         status:
 *           type: boolean
 *           example: true
 *         cartId:
 *           type: number
 *           example: 1
 *         productId:
 *           type: number
 *           example: 1
 *     add_cart:
 *       type: object
 *       properties:
 *         quantity:
 *           type: number
 *           example: 3
 *         status:
 *           type: boolean
 *           example: true
 *         productId:
 *           type: number
 *           example: 1
 *     update_cart:
 *       type: object
 *       properties:
 *         quantity:
 *           type: number
 *           example: 3
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

const ProductInCart = db.define(
  "productsInCart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "cart_id",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "product_id",
    },
  }, {
    timestamps: false,
  }
);

module.exports = ProductInCart;
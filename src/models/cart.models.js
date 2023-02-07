const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_cart:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: ✅ Product successfully added to your cart
 *         producInCart:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *               example: 1
 *             quantity: 
 *               type: number
 *               example: 3
 *             status:
 *               type: boolean
 *               example: true
 *             productId:
 *               type: number
 *               example: 1
 *             price:
 *               type: number
 *               example: 30000
 *             cartId:
 *               type: number
 *               example: 1
 *     request_productsInCart:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: ✅ Product successfully added to your cart
 *         id:
 *           type: number
 *           example: 1
 *         totalPrice:
 *           type: number
 *           example: 358000
 *         status:
 *           type: boolean
 *           example: true
 *         productsInCart:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 example: 5
 *               quantity:
 *                 type: number
 *                 example: 5
 *               price:
 *                 type: number
 *                 example: 30000
 *               status:
 *                 type: boolean
 *                 example: true
 *               product_id:
 *                 type: number
 *                 example: 1
 *               product:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: Panela
 *                   price:
 *                     type: number
 *                     example: 30000
 *                   image:
 *                     type: string
 *                     example: http://image/tuimagen.jpg
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

const Cart = db.define(
  "cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      field: "total_price",
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
  },{
    timestamps: false,
  }
);

module.exports = Cart;
const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_order:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Nao
 *         order:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *               example: 6000
 *             totalPrice:
 *               type: number
 *               example: 23000
 *             status:
 *               type: boolean
 *               example: true
 *             userId:
 *               type: number
 *               example: 1
 *             prodctsInOrder:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   orderId:
 *                     type: number
 *                     example: 1
 *                   productId:
 *                     type: number
 *                     example: 2
 *                   quantity:
 *                     type: number
 *                     example: 3
 *                   price:
 *                     type: number
 *                     example: 7000
 *                   name:
 *                     type: string
 *                     example: Pan
 *                   image:
 *                     type: string
 *                     example: http://imagen.com/tuImagen.jpg
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

const ProductsInOrder = db.define(
  "productsInOrder",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "order_id",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "product_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductsInOrder;

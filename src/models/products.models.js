const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Borojó
 *         price:
 *           type: number
 *           example: 7000
 *         image:
 *           type: array
 *           example:  http://imagen.com/tuImagen.jpg
 *         availableQty:
 *           type: number
 *           example: 10
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: number
 *           example: 1
 *     create_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Borojó
 *         price:
 *           type: number
 *           example: 7000
 *         image:
 *           type: array
 *           example: http://imagen.com/tuImagen.jpg
 *         availableQty:
 *           type: number
 *           example: 10
 *         status:
 *           type: boolean
 *           example: true
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

const Products = db.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    availableQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "available_qty",
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Products;

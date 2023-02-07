const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         username:
 *           type: string
 *           example: Nao
 *         email:
 *           type: string
 *           example: nao@gmail.com
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Nao
 *         email:
 *           type: string
 *           example: nao@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: nao@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     request_auth:
 *       type: object
 *       properties:
 *         isValid:
 *           type: boolean
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *               example: 1
 *             username:
 *               type: string
 *               example: nao
 *             email:
 *               type: string
 *               example: nao@gmail.com
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hb0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCQxcHRjdUduZXFOaDBHcW12Ym0ueGd1OE0vVkZ3bVR6d3lxZkpzc0RzZnM3U2N0UDZEdlNaYSIsImlhdCI6MTY3NTM2Nzc0NCwiZXhwIjoxNjc1MzY4MzQ0fQ.iVGV4aZILWat8IvjzHlJtmXrqHOzm3qBH2irxh2GYCSRhA8ta-Bka9XEq9pZmc73ECAGmA5w0gWdGPv59k9qMA"
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: Bearer
 *       bearerFormat: JWT
 */

const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
  }
);

module.exports = Users;

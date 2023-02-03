const { userLogin } = require("./auth.controllers");
const {userRegister, getUser} = require("./users.controllers");
const { 
  getProductsAll, createProducts, 
} = require("./products.controllers");
const { addProducts, showCart} = require("./cart.controllers");
const { createOrder, getOrder } = require("./orders.controllers");

module.exports = {
  userLogin,
  userRegister,
  getUser,
  getProductsAll,
  createProducts,
  addProducts,
  showCart,
  createOrder,
  getOrder,
}
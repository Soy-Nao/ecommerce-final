const authRouter = require("./auth.routes");
const userRoutes = require("./users.routes"); 
const productRoutes = require("./products.routes");
const cartRoutes = require("./cart.routes");
const orderRoutes = require("./orders.routes");

module.exports = { 
  authRouter, 
  userRoutes,
  productRoutes,
  cartRoutes,
  orderRoutes,
}
const { Users, Cart, Orders, Products, ProductsInOrder, ProductInCart } = require("./index");

const initModels = () => {

  // U:M

  Products.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(Products, { as: "products", foreignKey: "user_id" });
  

  // U:U

  Cart.belongsTo(Users, { as: "carritos", foreignKey: "user_id" });
  Users.hasOne(Cart, { as: "propietario", foreignKey: "user_id" });

  //U:M 

  Orders.belongsTo(Users, { as: "compra", foreignKey: "user_id" });
  Users.hasMany(Orders, { as: "purchased", foreignKey: "user_id" });

  // M:M

  ProductsInOrder.belongsTo(Orders, { foreignKey: "order_id" })
  Orders.hasMany(ProductsInOrder, { as: "orders", foreignKey: "order_id" })

  ProductsInOrder.belongsTo(Products, { as: "produ", foreignKey: "product_id" })
  Products.hasMany(ProductsInOrder, { as: "prod", foreignKey: "product_id" })

  // M:M

  ProductInCart.belongsTo(Cart, { foreignKey: "cart_id" })
  Cart.hasMany(ProductInCart, { as: "products", foreignKey: "cart_id" })

  ProductInCart.belongsTo(Products, { foreignKey: "product_id" })
  Products.hasMany(ProductInCart, {  as: "product", foreignKey: "product_id" })

};

module.exports = initModels;
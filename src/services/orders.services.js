const {
  Users,
  Orders,
  ProductsInOrder,
  Cart,
  ProductInCart,
  Products,
} = require("../models");
const transporter = require("../utils/mailter");
const orderTemplate = require("../templates/newOrder");

class OrdersServices {
  static async postOrder(id) {
    try {
      const showAllProducts = await ProductInCart.findAll();
      const cart = await Cart.findOne({ where: { id } });
      const order = await Orders.create({
        totalPrice: cart.totalPrice,
        status: cart.status,
        userId: id,
      });
      const quantityArray = [];
      showAllProducts.forEach((prod) => {
        quantityArray.push(prod.quantity);
      });
      const quantity = quantityArray.reduce((a, b) => a + b);

      showAllProducts.forEach(async (prod) => {
        const product = await Products.findOne({ where: prod.productId });
        product.update({ availableQty: product.availableQty - prod.quantity });
      });

      cart.update({
        status: true,
        totalPrice: 0,
      });

      const user = await Users.findOne({ where: { id } });

      transporter.sendMail({
        from: "<loscanalesdenao@gmail.com>",
        to: user.email,
        subject: `Gracias por compra, profe vuelva pronto :V , por que no creo q nadie mas lo haga, y si no sigo vendiendo me quedo sin para comer :V `,
        text: `Haz realizado la compra de ${quantity} productos por un total de ${order.totalPrice} la propina es voluntaria :V `,
        html: orderTemplate(user.username, quantity, order.totalPrice),
      });

      showAllProducts.forEach(async (prod) => {
        await prod.destroy();
      });
      return order;
    } catch (error) {
      throw error;
    }
  }
  static async getOrder(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["username"],
        include: {
          model: Orders,
          as: "purchased",
          attributes: {
            exclude: ["userId", "user_id"],
          },
          include: {
            model: ProductsInOrder,
            as: "orders",
            attributes: {
              exclude: ["orderId", "order_id", "productId", "product_id"],
            },
          },
        },
      });
      const quantityProducts = await ProductsInOrder.findAll();
      const arrayPrice = [];
      const arrayQuantity = [];

      quantityProducts?.forEach((purch) => {
        arrayPrice.push(purch.dataValues.price);
        arrayQuantity.push(purch.dataValues.quantity);
      });

      const addArrayQuantity = arrayQuantity.reduce((a, z) => a + z);
      const priceTotality = arrayPrice.reduce((a, z) => a + z);

      result.dataValues.totalPrice = priceTotality;
      result.dataValues.totalProducts = addArrayQuantity;

      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrdersServices;

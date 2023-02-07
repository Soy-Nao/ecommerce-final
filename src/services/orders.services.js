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
  static async postCreateOrder(userId) {
    try {
      const currentCart = await Cart.findOne({ where: { userId } });
      if (!currentCart)
        throw new Error(
          `No se encontró el carrito con ID de usuario ${userId}`
        );
      const productsInCurrentCart = await ProductInCart.findAll({
        where: { cartId: currentCart.id },
      });
      if (!productsInCurrentCart.length)
        throw new Error(
          `El carrito con ID de usuario ${userId} no tiene productos`
        );

      const newOrder = await Orders.create({
        totalPrice: currentCart.totalPrice,
        status: currentCart.status,
        userId,
      });

      const currentUser = await Users.findOne({ where: { id: userId } });
      if (!currentUser)
        throw new Error(`No se encontró el usuario con ID ${userId}`);

      const productsInNewOrder = [];
      for (const productInCurrentCart of productsInCurrentCart) {
        const product = await Products.findOne({
          where: { id: productInCurrentCart.productId },
        });
        if (!product)
          throw new Error(
            `No se encontró el producto con ID ${productInCurrentCart.productId}`
          );

        product.availableQty -= productInCurrentCart.quantity;
        await product.save();

        productsInNewOrder.push({
          orderId: newOrder.id,
          productId: product.id,
          quantity: productInCurrentCart.quantity,
          price: product.price,
          name: product.name,
          image: product.image,
        });
      }
      await ProductsInOrder.bulkCreate(productsInNewOrder);

      // Enviar el correo electrónico de confirmación de compra
      transporter.sendMail({
        from: "<loscanalesdenao@gmail.com>",
        to: currentUser.email,
        subject: `Gracias por su compra en nuestra tienda`,
        text: `Ha realizado la compra de ${productsInNewOrder.length} productos por un total de ${newOrder.totalPrice}`,
        html: orderTemplate(
          currentUser.username,
          productsInNewOrder.length,
          newOrder.totalPrice
        ),
      });

      // Actualizar el estado y el precio total del carrito
      currentCart.status = true;
      currentCart.totalPrice = 0;
      await currentCart.save();

      
      // Eliminar todos los productos del carrito de compras
      await ProductInCart.destroy({ where: { cartId: currentCart.id } });
            
      const order = newOrder;
      return {
        username: currentUser.username,
        order: {
          id: newOrder.id,
          totalPrice: newOrder.totalPrice,
          status: newOrder.status,
          userId: newOrder.userId,
          productsInOrder: productsInNewOrder,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  static async getOrdersByUser(id) {
    try {
      const foundUser = await Users.findOne({ where: { id } });

      if (!foundUser) {
        throw new Error("User not found");
      }

      const user = await Users.findOne({
        where: { id },
        include: {
          model: Orders,
          as: "purchased",
          attributes: {
            exclude: ["userId", "user_id", "updatedAt"],
          },
          include: {
            model: ProductsInOrder,
            as: "ordersP",
            attributes: {
              exclude: ["orderId", "order_id", "productId", "product_id"],
            },
            include: {
              model: Products,
              as: "product",
              attributes: {
                exclude: [
                  "productId",
                  "product_id",
                  "userId",
                  "user_id",
                  "availableQty",
                  "status",
                ],
              },
            },
          },
        },
      });

      if (!user) {
        throw new Error(`User with id ${id} not found.`);
      }

      const { username } = user.dataValues;
      const orders = user.purchased;
      const totalOrders = orders.length;

      let totalPrice = 0;
      orders.forEach((order) => {
        totalPrice += order.totalPrice;
      });

      return {
        username,
        totalOrders,
        totalPrice,
        orders,
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrdersServices;

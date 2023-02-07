const { Cart, ProductInCart, Products, Users } = require("../models");

class CartServices {
  static async readCart(id) {
    try {
      const result = await Cart.findOne({
        where: { id },
        attributes: {
          exclude: ["userId", "user_id"],
        },
        include: {
          model: ProductInCart,
          as: "productsInCart",
          attributes: {
            exclude: ["cartId", "productId"],
          },
          include: {
            model: Products,
            as: "product",
            attributes: ["id", "name", "price", "image"],
          },
        },
      });
      const totalPriceCartArray = await ProductInCart.findAll();
      const cart = await Cart.findOne({ where: { id } });
      const totalPriceCart = [];
      totalPriceCartArray.forEach(async (total) => {
        totalPriceCart.push(total.price);
        const priceTotal = totalPriceCart.reduce((a, b) => a + b);
        await cart?.update({ totalPrice: priceTotal });
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addProductToCart(cartId, newProduct) {
    try {
      const { productId, quantity } = newProduct;
      const foundProduct = await Products.findOne({ where: { id: productId } });
      if (!foundProduct) {
        throw new Error(`Product with id ${productId} not found.`);
      }
  
      if (foundProduct.availableQty < quantity) {
        throw new Error(
          `Only ${foundProduct.availableQty} units of product with id ${productId} available.`
        );
      }
  
      const totalPriceForProduct = quantity * foundProduct.price;
      const addedProduct = await ProductInCart.create({
        ...newProduct,
        price: totalPriceForProduct,
        cartId,
        productId,
      });
  
      const productsInCart = await ProductInCart.findAll({ where: { cartId } });
      const cartTotal = productsInCart.reduce(
        (sum, product) => sum + product.price,
        0
      );
  
      const cart = await Cart.findOne({
        where: { id: cartId },
        attributes: {
          exclude: ["user_id"],
        },
        include: {
          model: ProductInCart,
          as: "productsInCart",
          attributes: {
            exclude: ["product_id", "cart_id"],
          },
          include: {
            model: Products,
            as: "product",
            attributes: ["name", "price"],
          },
        },
      });
      await cart.update({ totalPrice: cartTotal });
  
      const message = "✅ Product successfully added to your cart";
      return { message, productInCart: addedProduct };
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = CartServices;

const { Cart, ProductInCart, Products } = require("../models");

class CartServices {

  static async readCart(id) {

    try {
      const result = await Cart.findOne({
        where: { id },
        attributes: {
          exclude: ["userId", "user_id"]
        },
        include: {
          model: ProductInCart,
          as: "products",
          attributes: {
            exclude: ["cartId", "productId"]
          },
          include: {
            model: Products,
            as: "product",
            attributes: ["id", "name", "price", "image"]
          }
        },
      });
      const totalPriceCartArray = await ProductInCart.findAll();
      const cart = await Cart.findOne({where: {id}});
      const totalPriceCart = [];
      totalPriceCartArray.forEach( async(total) => { 
        totalPriceCart.push(total.price);
        const priceTotal = totalPriceCart.reduce((a, b) => a + b);
        await cart?.update({totalPrice: priceTotal});
        console.log(priceTotal)
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addCart(id, product) {
    try {

      const idProduct = product.productId;
      const priceProduct =  await Products.findOne({ where: {id:idProduct}});
      const priceTotalProduct = product.quantity * priceProduct?.price;
      const result = await ProductInCart.create({...product, price: priceTotalProduct, cartId: id, productId: idProduct});

      const totalPriceCartArray = await ProductInCart.findAll();
      const totalPriceCart = totalPriceCartArray.map(total => { return total.price});
      const priceTotal = totalPriceCart.reduce((a, b) => a + b);
      const cart = await Cart.findOne({where: {id}});
      const res = await cart.update({totalPrice: priceTotal});
      
      return res;
   
    } catch (error) {
      throw error;
    }
  } 

}

module.exports = CartServices;
const { CartServices } = require("../services");

const showCart = async (req, res, next) => {
  try {
    const { id }  = req.params;
    const result = await CartServices.readCart(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "something went wrong, or there are no products to display. Add new products to cart",
    });
  }
}
const addProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await CartServices.addProductToCart(id, body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "something went wrong",
    });
  }
}




module.exports = {
  addProducts,
  showCart,
};
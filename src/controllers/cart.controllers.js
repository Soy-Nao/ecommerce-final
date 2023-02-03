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
      message: "Algo salio mal, o no hay productos que mostrar. Agrega nuevos productos al carrito",
    });
  }
}
const addProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await CartServices.addCart(id, body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}




module.exports = {
  addProducts,
  showCart,
};
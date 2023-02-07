const { OrdersServices } = require("../services");


const postCreateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await OrdersServices.postCreateOrder(id);
    res.status(201).json(result);

  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "something went wrong",
    });
  }
};
const getOrdersByUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await OrdersServices.getOrdersByUser(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "something went wrong",
    });
  }
};

module.exports = {
  postCreateOrder,
  getOrdersByUser,
};
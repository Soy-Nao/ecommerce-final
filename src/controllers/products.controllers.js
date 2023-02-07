const { ProductsServices } = require("../services");

const getProductsAll = async (req, res, next) => {
  try {
    const allProducts = await ProductsServices.getProdAll();
    const productsAvailable = [];
    allProducts.forEach((e) => {
      if( e.availableQty > 0) {
          productsAvailable.push(e);
      }
    })

    res.json(productsAvailable);
  } catch (error) {
    next({
        message: 'no se pudo obtener los productos',
        status:400,
        errorContent: error
    })
  }
}

const createProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await ProductsServices.createProd(id, body);
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
  getProductsAll,
  createProducts,
};

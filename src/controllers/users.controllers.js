const { UserServices } = require("../services");
const transporter = require("../utils/mailter");
const welcomeTemplate = require("../templates/welcome");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.createUser(newUser);
    res.status(201).json(result);

    transporter.sendMail({
      from: "<loscanalesdenao@gmail.com>",
      to: result.email,
      subject: "Bienvenido a Mi Ecommerce",
      text: `Hola ${result.username} bienvenido a la mejor tienda de productos online`,
      html: welcomeTemplate(result.username),
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Missing data",
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await UserServices.getUser(id);
    res.json(users);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "something went wrong",
    });
  }
};

module.exports = {
  userRegister,
  getUser,
};

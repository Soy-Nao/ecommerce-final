const { AuthServices } = require("../services");

const userLogin = async (req, res, next) => {
  try {
    
    const credentials = req.body;
    const result = await AuthServices.authenticate(credentials);

    if (result) {
      const { email, password } = result.user;
      const user = { email, password };
      const token = AuthServices.genToken(user);
      result.token = token;
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: "Invalid information" });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Email o contraseña inválida",
    });
  }
};

module.exports = {
  userLogin,
};


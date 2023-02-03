const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const db = require('./utils/database');
const handleError = require("./middlewares/error");
require("dotenv").config();
const { 
  authRouter, 
  userRoutes, 
  productRoutes, 
  cartRoutes,
  orderRoutes,
} = require("./routes");
const initModels = require("./models/initModels");

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());  

initModels()

db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((err) => console.log(err))
  
db.sync({ alter: true })
  .then(() => console.log('Conexión exitosa'))
  .catch((err) => console.log(err))
  

app.get('/', (req, res) => {
  res.status(200).json({
    status: "Respuesta exitosa",
    description: "Prueva esta API con SWAGGER en el siguiente 'link'", 
    link: process.env.HOST,
  })
});

app.use("/api/v1", authRouter);
app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", cartRoutes);
app.use("/api/v1", orderRoutes);

  
app.use(handleError);
module.exports = app;
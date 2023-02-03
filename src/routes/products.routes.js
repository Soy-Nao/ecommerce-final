const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { 
  getProductsAll,
  createProducts,
} = require("../controllers");

/**
 * @openapi
 * /api/v1/users/{id}/products:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: ❇️Add an product to inventory.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Enter a user Id
 *     requestBody:
 *       description: ✅Add a new item to the product list in the application.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/create_product"
 *     responses:
 *       201:
 *         description: Product added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ✅
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 * /api/v1/products:
 *   get:
 *     summary: Display the complete list of products greater than 0.
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The data has been displayed correctly.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ✅
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 */


router.post("/users/:id/products", authenticate, createProducts)

router.get("/products", getProductsAll);

module.exports = router;
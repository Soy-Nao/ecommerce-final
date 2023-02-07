const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { postCreateOrder, getOrdersByUser } = require("../controllers");

/**
 * @openapi
 * /api/v1/user/{id}/orders:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: ✅Create a order in the app
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       201:
 *         description: Order Created
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
 *                     $ref: "#/components/schemas/request_order"
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: 👀 View details of orders placed by customers in the application
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: Data displayed successfully
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
 *                     $ref: "#/components/schemas/request_order"
 */

router.post("/user/:id/orders", authenticate, postCreateOrder)

router.get("/user/:id/orders", authenticate, getOrdersByUser);

module.exports = router;
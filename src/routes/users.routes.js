const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { userRegister, getUser } = require("../controllers");

/**
 * @openapi
 * /api/v1/user/register:
 *   post:
 *     summary: ❇️Registration of a new user in the application
 *     tags: [Users]
 *     requestBody:
 *       description: ⚠️To create an account, a user name, e-mail address and password are required.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       201:
 *         description: User Created 😊
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
 *                     $ref: "#/components/schemas/users"
 * /api/v1/user/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: 👀Display a user's information in the application.
 *     tags: [Users]
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
 *         description: 👌The data have been successfully displayed.
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
 *                     $ref: "#/components/schemas/users"
 */

router.post("/user/register", userRegister);
router.get("/user/:id", authenticate, getUser);

module.exports = router;
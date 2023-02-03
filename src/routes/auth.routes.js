const express = require("express");
const router = express.Router();
const { userLogin } = require("../controllers");

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: ❇️Application login
 *     tags: [Auth]
 *     requestBody:
 *       description: 🫡Open a session in the application to obtain the necessary permissions to perform tasks.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       201:
 *         description: 😉Access to the application
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
 *                     $ref: "#/components/schemas/request_auth"
 */

router.post("/auth/login", userLogin);

module.exports = router;

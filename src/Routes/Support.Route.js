import express from "express";
import { sendSupportMail } from "../Contollers/Support.controller.js";
// import { sendSupportMail } from "../contollers/Support.Controller.js";

const router = express.Router();

/**
 * @openapi
 * /api/support/send:
 *   post:
 *     tags:
 *       - Support
 *     summary: POST /send
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/send", sendSupportMail);

export default router;

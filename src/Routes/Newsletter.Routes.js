import express from "express";
import { getAllSubscribers, subscribeToNewsletter } from "../Contollers/newsletter.controller.js";
const router = express.Router();


/**
 * @openapi
 * /api/newsletter/subscribe:
 *   post:
 *     tags:
 *       - Newsletter
 *     summary: POST /subscribe
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/subscribe', subscribeToNewsletter);
/**
 * @openapi
 * /api/newsletter/subscribers:
 *   get:
 *     tags:
 *       - Newsletter
 *     summary: GET /subscribers
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/subscribers', getAllSubscribers);




export default router;

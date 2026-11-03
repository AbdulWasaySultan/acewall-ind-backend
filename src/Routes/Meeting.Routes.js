import express from "express";
import { isUser } from "../middlewares/Auth.Middleware.js";
import { joinMeeting } from "../Contollers/MeetingController.js";


const router = express.Router();
/**
 * @openapi
 * /join/{meetingId}:
 *   get:
 *     tags:
 *       - Meeting
 *     summary: GET /join/{meetingId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/join/:meetingId", isUser, joinMeeting);

export default router;
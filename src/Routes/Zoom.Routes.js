import express from "express";
import {
  scheduleMeeting,
  getCourseMeetings,
  deleteMeeting,
  joinMeeting,
  getActiveMeetings,
  handleZoomWebhook,
  endMeeting,
  getUpcomingStudentMeeting,
} from "../Contollers/Zoom.Controller.js";
import { isUser } from "../middlewares/Auth.Middleware.js";

const router = express.Router();

// 1. Get meetings for a course
/**
 * @openapi
 * /api/zoom/course/{courseId}:
 *   get:
 *     tags:
 *       - Zoom
 *     summary: GET /course/{courseId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/course/:courseId", isUser, getCourseMeetings);
/**
 * @openapi
 * /api/zoom/upcoming:
 *   get:
 *     tags:
 *       - Zoom
 *     summary: GET /upcoming
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/upcoming", isUser, getUpcomingStudentMeeting);

// 1.1 Get all active meetings for enrolled courses
/**
 * @openapi
 * /api/zoom/active:
 *   get:
 *     tags:
 *       - Zoom
 *     summary: GET /active
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/active", isUser, getActiveMeetings);

// 2. Schedule a new meeting
/**
 * @openapi
 * /api/zoom/schedule:
 *   post:
 *     tags:
 *       - Zoom
 *     summary: POST /schedule
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/schedule", isUser, scheduleMeeting);

// 3. Join a meeting (Get URL) - For both Host (Start) and Student (Join)
// Frontend should call this when user clicks "Start" or "Join"
/**
 * @openapi
 * /api/zoom/join/{meetingId}:
 *   get:
 *     tags:
 *       - Zoom
 *     summary: GET /join/{meetingId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/join/:meetingId", isUser, joinMeeting);

// 4. Delete a meeting
/**
 * @openapi
 * /api/zoom/{meetingId}:
 *   delete:
 *     tags:
 *       - Zoom
 *     summary: DELETE /{meetingId}
 *     responses:
 *       200:
 *         description: Success
 */
router.delete("/:meetingId", isUser, deleteMeeting);

// 5. End a meeting manually
/**
 * @openapi
 * /api/zoom/end/{meetingId}:
 *   put:
 *     tags:
 *       - Zoom
 *     summary: PUT /end/{meetingId}
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/end/:meetingId", isUser, endMeeting);

// 6. Zoom Webhook
/**
 * @openapi
 * /api/zoom/webhook:
 *   post:
 *     tags:
 *       - Zoom
 *     summary: POST /webhook
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/webhook", handleZoomWebhook);

export default router;

import express from "express";
import {
  trackShare,
  getShareAnalytics,
  getCourseShareAnalytics,
  getGlobalShareAnalytics,
} from "../Contollers/CourseShare.controller.js";
import { isUser } from "../middlewares/Auth.Middleware.js";
import { checkRole } from "../middlewares/admins.middleware.js";

const router = express.Router();

// Public route for tracking shares
/**
 * @openapi
 * /api/course-share/track:
 *   post:
 *     tags:
 *       - Course Share
 *     summary: POST /track
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/track", trackShare);

// Admin routes for viewing analytics
router.use(isUser, checkRole);

/**
 * @openapi
 * /api/course-share/analytics:
 *   get:
 *     tags:
 *       - Course Share
 *     summary: GET /analytics
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/analytics", getShareAnalytics); // Legacy support
/**
 * @openapi
 * /api/course-share/analytics/global:
 *   get:
 *     tags:
 *       - Course Share
 *     summary: GET /analytics/global
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/analytics/global", getGlobalShareAnalytics);
/**
 * @openapi
 * /api/course-share/analytics/course/{courseId}:
 *   get:
 *     tags:
 *       - Course Share
 *     summary: GET /analytics/course/{courseId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/analytics/course/:courseId", getCourseShareAnalytics);

export default router;

import express from "express";
import {
  createAnnouncement,
  getAnnouncementsForCourse,
  getAnnouncementsByTeacher,
  deleteAnnouncement,
  getAnnouncementsForStudent,
} from "../Contollers/announcement.controller.js";
import { isUser } from "../middlewares/Auth.Middleware.js";
import { upload } from "../lib/multer.config.js";
import { isEnrolledMiddleware } from "../middlewares/isEnrolled.middleware.js";
import { resolveEnrollmentFromQuery } from "../middlewares/enrollment-resolvers.js";

const router = express.Router();

/**
 * @openapi
 * /api/announcements/getbystudent/{studentId}:
 *   get:
 *     tags:
 *       - Announcement
 *     summary: GET /getbystudent/{studentId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/getbystudent/:studentId", isUser, getAnnouncementsForStudent);
// router.get("/getannouncementforcourse", isUser, resolveEnrollmentFromQuery, isEnrolledMiddleware, getAnnouncementsForCourse);
/**
 * @openapi
 * /api/announcements/getannouncementforcourse:
 *   get:
 *     tags:
 *       - Announcement
 *     summary: GET /getannouncementforcourse
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/getannouncementforcourse", isUser, resolveEnrollmentFromQuery, getAnnouncementsForCourse);
/**
 * @openapi
 * /api/announcements/createannouncement:
 *   post:
 *     tags:
 *       - Announcement
 *     summary: POST /createannouncement
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/createannouncement", isUser, upload.any(), createAnnouncement);
/**
 * @openapi
 * /api/announcements/getbyteacher/{teacherId}:
 *   get:
 *     tags:
 *       - Announcement
 *     summary: GET /getbyteacher/{teacherId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/getbyteacher/:teacherId", isUser, getAnnouncementsByTeacher);
/**
 * @openapi
 * /api/announcements/{id}:
 *   delete:
 *     tags:
 *       - Announcement
 *     summary: DELETE /{id}
 *     responses:
 *       200:
 *         description: Success
 */
router.delete("/:id", isUser, deleteAnnouncement);

export default router;

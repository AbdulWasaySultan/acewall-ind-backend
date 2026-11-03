import express from "express";
import { ChapterPagesforStudent, createpage, deletePage, getAllPages, lessonPagesforStudent } from "../Contollers/pages.controller.js";
import { upload } from "../lib/multer.config.js";



const router = express.Router();

router.post(
    "/createpage/:courseId/:type/:typeId",
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "files", maxCount: 10 },
    ]),
    createpage
);
/**
 * @openapi
 * /api/pages/{courseId}/{type}/{typeId}:
 *   get:
 *     tags:
 *       - Pages
 *     summary: GET /{courseId}/{type}/{typeId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/:courseId/:type/:typeId", getAllPages);
/**
 * @openapi
 * /api/pages/deletepage/{pageId}:
 *   delete:
 *     tags:
 *       - Pages
 *     summary: DELETE /deletepage/{pageId}
 *     responses:
 *       200:
 *         description: Success
 */
router.delete("/deletepage/:pageId", deletePage);
/**
 * @openapi
 * /api/pages/getChapterPages/{chapterId}:
 *   get:
 *     tags:
 *       - Pages
 *     summary: GET /getChapterPages/{chapterId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/getChapterPages/:chapterId", ChapterPagesforStudent)
/**
 * @openapi
 * /api/pages/getLessonPages/{lessonId}:
 *   get:
 *     tags:
 *       - Pages
 *     summary: GET /getLessonPages/{lessonId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/getLessonPages/:lessonId", lessonPagesforStudent)


export default router;
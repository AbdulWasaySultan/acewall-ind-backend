import express from "express";
import {
  createCampaign,
  updateCampaign,
  deleteCampaign,
  getActiveCampaign,
  getAllCampaigns,
} from "../Contollers/Campaign.controller.js";
import { isUser } from "../middlewares/Auth.Middleware.js";
import { checkRole } from "../middlewares/admins.middleware.js";

const router = express.Router();

// Public endpoint
/**
 * @openapi
 * /api/campaigns/active:
 *   get:
 *     tags:
 *       - Campaign
 *     summary: GET /active
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/active", getActiveCampaign);

// Admin only endpoints
router.use(isUser, checkRole);

/**
 * @openapi
 * /api/campaigns/:
 *   get:
 *     tags:
 *       - Campaign
 *     summary: GET /
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", getAllCampaigns);
/**
 * @openapi
 * /api/campaigns/:
 *   post:
 *     tags:
 *       - Campaign
 *     summary: POST /
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/", createCampaign);
/**
 * @openapi
 * /api/campaigns/{id}:
 *   put:
 *     tags:
 *       - Campaign
 *     summary: PUT /{id}
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/:id", updateCampaign);
/**
 * @openapi
 * /api/campaigns/{id}:
 *   delete:
 *     tags:
 *       - Campaign
 *     summary: DELETE /{id}
 *     responses:
 *       200:
 *         description: Success
 */
router.delete("/:id", deleteCampaign);

export default router;

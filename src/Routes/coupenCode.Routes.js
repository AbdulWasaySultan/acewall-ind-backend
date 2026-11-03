import express from "express";
import { getCouponsByCourse, getCouponsByStatus, createCoupon, updateCoupon, getStripeCoupons } from "../Contollers/coupen.controller.js";
import { isUser } from "../middlewares/Auth.Middleware.js";

const router = express.Router();

/**
 * @openapi
 * /api/coupon/createCoupon:
 *   post:
 *     tags:
 *       - Coupon
 *     summary: POST /createCoupon
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/createCoupon", isUser, createCoupon)
/**
 * @openapi
 * /api/coupon/updateCoupon/{id}:
 *   patch:
 *     tags:
 *       - Coupon
 *     summary: PATCH /updateCoupon/{id}
 *     responses:
 *       200:
 *         description: Success
 */
router.patch("/updateCoupon/:id", isUser, updateCoupon)
/**
 * @openapi
 * /api/coupon/getCouponsByStatus:
 *   get:
 *     tags:
 *       - Coupon
 *     summary: GET /getCouponsByStatus
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/getCouponsByStatus", isUser, getCouponsByStatus)
/**
 * @openapi
 * /api/coupon/getBycourse/{courseId}:
 *   get:
 *     tags:
 *       - Coupon
 *     summary: GET /getBycourse/{courseId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/getBycourse/:courseId", isUser, getCouponsByCourse)
/**
 * @openapi
 * /api/coupon/stripe-coupons/{courseId}:
 *   get:
 *     tags:
 *       - Coupon
 *     summary: GET /stripe-coupons/{courseId}
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/stripe-coupons/:courseId", getStripeCoupons);
export default router
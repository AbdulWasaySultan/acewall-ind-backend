import express from "express";
import {
  getGoogleDriveAuthUrl,
  handleGoogleDriveCallback,
  checkDriveConnectionStatus,
  disconnectGoogleDrive,
} from "../Contollers/googleDrive.controller.js";
import {
  uploadFromGoogleDrive,
  listGoogleDriveFiles,
  getGoogleDrivePickerToken,
  uploadMultipleFromGoogleDrive,
} from "../Contollers/googleDriveUpload.controller.js";
import { isUser } from "../middlewares/Auth.Middleware.js";

const router = express.Router();

// Use isUser as isUser

/**
 * @route   GET /api/drive/auth-url
 * @desc    Generate Google Drive OAuth URL
 * @access  Private
 */
/**
 * @openapi
 * /api/drive/auth-url:
 *   get:
 *     tags:
 *       - Google Drive
 *     summary: GET /auth-url
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/auth-url", isUser, getGoogleDriveAuthUrl);

/**
 * @route   GET /api/drive/callback
 * @desc    Handle Google Drive OAuth callback
 * @access  Public (called by Google)
 */
/**
 * @openapi
 * /api/drive/callback:
 *   get:
 *     tags:
 *       - Google Drive
 *     summary: GET /callback
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/callback", handleGoogleDriveCallback);

/**
 * @route   GET /api/drive/status
 * @desc    Check Google Drive connection status
 * @access  Private
 */
/**
 * @openapi
 * /api/drive/status:
 *   get:
 *     tags:
 *       - Google Drive
 *     summary: GET /status
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/status", isUser, checkDriveConnectionStatus);

/**
 * @route   POST /api/drive/disconnect
 * @desc    Disconnect Google Drive
 * @access  Private
 */
/**
 * @openapi
 * /api/drive/disconnect:
 *   post:
 *     tags:
 *       - Google Drive
 *     summary: POST /disconnect
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/disconnect", isUser, disconnectGoogleDrive);

/**
 * @route   POST /api/drive/upload
 * @desc    Upload single file from Google Drive to Cloudinary
 * @access  Private
 */
/**
 * @openapi
 * /api/drive/upload:
 *   post:
 *     tags:
 *       - Google Drive
 *     summary: POST /upload
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/upload", isUser, uploadFromGoogleDrive);

/**
 * @route   POST /api/drive/upload-multiple
 * @desc    Upload multiple files from Google Drive
 * @access  Private
 */
/**
 * @openapi
 * /api/drive/upload-multiple:
 *   post:
 *     tags:
 *       - Google Drive
 *     summary: POST /upload-multiple
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/upload-multiple", isUser, uploadMultipleFromGoogleDrive);

/**
 * @route   GET /api/drive/files
 * @desc    List files from user's Google Drive
 * @access  Private
 */
/**
 * @openapi
 * /api/drive/files:
 *   get:
 *     tags:
 *       - Google Drive
 *     summary: GET /files
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/files", isUser, listGoogleDriveFiles);

/**
 * @route   GET /api/drive/picker-token
 * @desc    Get OAuth token for Google Picker API
 * @access  Private
 */
/**
 * @openapi
 * /api/drive/picker-token:
 *   get:
 *     tags:
 *       - Google Drive
 *     summary: GET /picker-token
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/picker-token", isUser, getGoogleDrivePickerToken);

export default router;

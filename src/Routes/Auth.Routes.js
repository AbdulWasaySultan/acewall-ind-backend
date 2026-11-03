import express from "express";
import {
  allUser,
  checkAuth,
  login,
  logout,
  updateUser,
  checkUser,
  allTeacher,
  initiateSignup,
  resendOTP,
  forgetPassword,
  resetPassword,
  getUserInfo,
  updateProfileImg,
  updatePassword,
  updatePasswordOTP,
  updateEmailOTP,
  updateEmail,
  verifyOTPForgotPassword,
  getStudentById,
  uploadTeacherDocument,
  deleteTeacherDocument,
  verifyTeacherDocument,
  verifyEmailOtp,
  verifyPhoneOtp,
  resendPhoneOTP,
  updatePhoneOTP,
  updatePhone,
  previewSignIn,
  previewSignOut,
  googleAuth,
} from "../Contollers/auth.controller.js";
import { isUser } from "../middlewares/Auth.Middleware.js";
import { upload } from "../lib/multer.config.js";
import { deleteUser } from "../Contollers/UserDelete.controller.js";
// import { checkRole, isAllowed } from "../Middlewares/admins.Middleware.js";
const router = express.Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a new user (initiates signup flow)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Signup initiated
 */
/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /register
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/register", initiateSignup);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns auth token and user info
 */
/**
 * @openapi
 * /api/auth/verifyOTP:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /verifyOTP
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/verifyOTP", verifyEmailOtp);
/**
 * @openapi
 * /api/auth/verifyPhoneOTP:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /verifyPhoneOTP
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/verifyPhoneOTP", verifyPhoneOtp);
/**
 * @openapi
 * /api/auth/resendOTP:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /resendOTP
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/resendOTP", resendOTP);
/**
 * @openapi
 * /api/auth/resendPhoneOTP:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /resendPhoneOTP
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/resendPhoneOTP", resendPhoneOTP);
/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /login
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/login", login);
/**
 * @openapi
 * /api/auth/google:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /google
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/google", googleAuth);
/**
 * @openapi
 * /api/auth/forgotPassword:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /forgotPassword
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/forgotPassword", forgetPassword);
/**
 * @openapi
 * /api/auth/verifyForgotPassOTP:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /verifyForgotPassOTP
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/verifyForgotPassOTP", verifyOTPForgotPassword);
/**
 * @openapi
 * /api/auth/resetPassword:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /resetPassword
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/resetPassword", resetPassword);
/**
 * @openapi
 * /api/auth/logout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /logout
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/logout", logout);
/**
 * @openapi
 * /api/auth/checkAuth:
 *   get:
 *     tags:
 *       - Auth
 *     summary: GET /checkAuth
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/checkAuth", isUser, checkAuth);
/**
 * @openapi
 * /api/auth/check-existence:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /check-existence
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/check-existence", checkUser);
/**
 * @openapi
 * /api/auth/users:
 *   get:
 *     tags:
 *       - Auth
 *     summary: GET /users
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/users", allUser);
/**
 * @openapi
 * /api/auth/updateuser:
 *   put:
 *     tags:
 *       - Auth
 *     summary: PUT /updateuser
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/updateuser", isUser, updateUser);
/**
 * @openapi
 * /api/auth/allTeacher:
 *   get:
 *     tags:
 *       - Auth
 *     summary: GET /allTeacher
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/allTeacher", allTeacher);
/**
 * @openapi
 * /api/auth/getUserInfo:
 *   get:
 *     tags:
 *       - Auth
 *     summary: GET /getUserInfo
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/getUserInfo", isUser, getUserInfo);
router.put(
  "/updateProfileImg",
  isUser,
  upload.single("profileImg"),
  updateProfileImg
);
/**
 * @openapi
 * /api/auth/updatePasswordOTP:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /updatePasswordOTP
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/updatePasswordOTP", isUser, updatePasswordOTP);
/**
 * @openapi
 * /api/auth/updatePassword:
 *   put:
 *     tags:
 *       - Auth
 *     summary: PUT /updatePassword
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/updatePassword", isUser, updatePassword);
/**
 * @openapi
 * /api/auth/updateEmailOTP:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /updateEmailOTP
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/updateEmailOTP", isUser, updateEmailOTP);
/**
 * @openapi
 * /api/auth/updateEmail:
 *   put:
 *     tags:
 *       - Auth
 *     summary: PUT /updateEmail
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/updateEmail", isUser, updateEmail);
/**
 * @openapi
 * /api/auth/updatePhoneOTP:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /updatePhoneOTP
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/updatePhoneOTP", isUser, updatePhoneOTP)
/**
 * @openapi
 * /api/auth/updatePhone:
 *   put:
 *     tags:
 *       - Auth
 *     summary: PUT /updatePhone
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/updatePhone", isUser, updatePhone)
router.post(
  "/uploadDocument",
  isUser,
  upload.single("document"), 
  uploadTeacherDocument
);

/**
 * @openapi
 * /api/auth/teacher/document/{documentId}:
 *   delete:
 *     tags:
 *       - Auth
 *     summary: DELETE /teacher/document/{documentId}
 *     responses:
 *       200:
 *         description: Success
 */
router.delete('/teacher/document/:documentId', isUser, deleteTeacherDocument);
/**
 * @openapi
 * /api/auth/verify-document/{userId}/{documentId}:
 *   patch:
 *     tags:
 *       - Auth
 *     summary: PATCH /verify-document/{userId}/{documentId}
 *     responses:
 *       200:
 *         description: Success
 */
router.patch("/verify-document/:userId/:documentId", verifyTeacherDocument);

/**
 * @openapi
 * /api/auth/previewSignIn:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /previewSignIn
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/previewSignIn", isUser, previewSignIn)
/**
 * @openapi
 * /api/auth/previewSignOut:
 *   post:
 *     tags:
 *       - Auth
 *     summary: POST /previewSignOut
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/previewSignOut", isUser, previewSignOut)


/**
 * @openapi
 * /api/auth/deleteUserwithData:
 *   delete:
 *     tags:
 *       - Auth
 *     summary: DELETE /deleteUserwithData
 *     responses:
 *       200:
 *         description: Success
 */
router.delete("/deleteUserwithData", isUser, deleteUser)
export default router;
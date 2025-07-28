import express from "express";
import { Protect } from "../Middleware/authMiddleware.js";
import {
  userLogin,
  userRegister,
  userLogout,
  userUpdate,
} from "../controllers/authController.js";
import multer from "multer";

const uploads = multer();

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/logout", userLogout);
router.put("/update", Protect, uploads.single("image"), userUpdate);

export default router;
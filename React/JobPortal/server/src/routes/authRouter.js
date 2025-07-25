import express from "express";
import { Protect } from "../Middleware/authMiddleware.js";
import {
  userLogin,
  userRegister,
  userLogout,
  userUpdate,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/logout", userLogout);
router.put("/update", Protect, userUpdate);

export default router;
import express from "express";
import {
  userRegister,
  userLogin,
  userLogout,
  userUpdate,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/logout", userLogout);
router.post("/update", userUpdate);

export default router;
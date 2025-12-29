import express from "express";
import {
  Login,
  Logout,
  createTeacher,
  getAllTeachers,
} from "../controller/authController.js";
import { Protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/login", Login);
router.get("/logout", Logout);
router.post("/teachers", Protect, isAdmin, createTeacher);
router.get("/teachers", Protect, isAdmin, getAllTeachers);

export default router;

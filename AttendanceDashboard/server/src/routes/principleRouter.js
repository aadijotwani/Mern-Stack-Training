import express from "express";

import { Protect } from "../middleware/authMiddleware.js";
import {
  getAllTeachers,
  addTeacher,
  updateTeacher,
  deleteTeacher,
  updateTeacherStatus,
} from "../controllers/principleController.js";

const router = express.Router();

router.get("/allTeachers", Protect, getAllTeachers);
router.post("/addTeacher", Protect, addTeacher);
router.put("/updateTeacher/:teacherId", Protect, updateTeacher);
router.delete("/deleteTeacher/:teacherId", Protect, deleteTeacher);
router.patch("/updateStatus/:teacherId", Protect, updateTeacherStatus);

export default router;

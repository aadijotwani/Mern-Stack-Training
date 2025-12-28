import express from "express";
import { createForm } from "../controller/formController.js";
import { getFormById } from "../controller/formController.js";
import { getAllForms } from "../controller/formController.js";
import { deleteForm } from "../controller/formController.js";


import { Protect } from "../middleware/authMiddleware.js";



const router = express.Router();

// POST /forms
router.post("/", Protect, createForm);
router.get("/", Protect, getAllForms);
router.get("/:id", getFormById);
router.delete("/:id", Protect, deleteForm);


export default router;

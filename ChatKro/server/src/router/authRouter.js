import express from "express";

const router = express.Router();

router.post("/regsiter", Register);
router.post("/login",Login)
router.put("/update", update)
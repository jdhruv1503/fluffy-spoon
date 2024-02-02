import express from "express";
import {
  createQuiz,
  updateQuiz,
  getQuiz,
} from "../controllers/quiz.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/get/:id", verifyToken, getQuiz);
router.post("/update/:id", verifyToken, updateQuiz);
router.post("/create/:id", verifyToken, createQuiz);

export default router;

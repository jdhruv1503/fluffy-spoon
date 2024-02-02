import express from "express";
import {
  createQuiz,
  updateQuiz,
  getQuiz,
} from "../controllers/quiz.controller.js";

const router = express.Router();

router.get("/get/:id", getQuiz);
router.post("/update/:id", updateQuiz);
router.post("/create", createQuiz);

export default router;

import Quiz from "../models/quiz.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
  res.json({
    message: "API is working!",
  });
};

export const createQuiz = async (req, res, next) => {
  try {
    const newQuiz = new Quiz({
      quiz: req.body.quiz, // Assuming the request body contains the quiz data
    });

    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

export const updateQuiz = async (req, res, next) => {
  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          quiz: req.body.quiz, // Update the quiz data
        },
      },
      { new: true }
    );

    const updatedUser = await User.findByIdAndUpdate(
      req.body.userid,
      {
        $push: {
          quizzes: req.params.id, // Update the quiz data
        },
      },
      { new: true }
    );

    if (!updatedQuiz) {
      throw errorHandler(404, "Quiz not found");
    }

    res.status(200).json(updatedQuiz);
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

export const getQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      throw errorHandler(404, "Quiz not found");
    }
    res.status(200).json(quiz);
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

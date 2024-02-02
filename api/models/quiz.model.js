import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    quiz: {
      type: mongoose.Schema.Types.Mixed,
      default: {}, // Default to an empty object
    },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;

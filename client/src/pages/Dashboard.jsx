import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import generateRandomQuestion from "../scripts/QuestionGenerator";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const generateDailyQuiz = () => {
    const quizLevel = currentUser.quizzes.length + 1;

    // Set breakpoints for quiz levels
    if (quizLevel <= 5) {
      generateCustomQuiz(1);
    } else if (quizLevel <= 10) {
      generateCustomQuiz(2);
    } else if (quizLevel <= 15) {
      generateCustomQuiz(3);
    } else {
      generateCustomQuiz(3);
    }
  };

  const generateCustomQuiz = async (quizLevel) => {
    console.log(`Generating custom quiz for level ${quizLevel}`);
    let questionsArray = [];

    // generate 10 qs
    for (let i = 0; i < 10; i++) {
      questionsArray.push(generateRandomQuestion(quizLevel));
    }

    const formData = { quiz: questionsArray };

    const res = await fetch("/api/quiz/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    console.log(data._id);
    navigate(`/quiz?id=${data._id}`);
  };

  return (
    <>
      <div className="pt-32">
        <h1 className="text-5xl text-center">Hello, {currentUser.username}!</h1>
        <div className="mt-16 mx-64 px-64 py-16 bg-green-svg bg-no-repeat bg-cover rounded-xl drop-shadow-lg flex flex-col">
          <h1 className="text-5xl text-center">Daily Challenge</h1>
          <p className="text-xl py-6 text-center">
            Unlock your potential! Take the daily challenge, randomly generated
            according to your learning level.
          </p>
          <button
            onClick={generateDailyQuiz}
            className="bg-green-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            Daily challenge quiz
          </button>
        </div>
        <div className="mt-8 mx-64 px-64 py-16 bg-slate-300  bg-no-repeat bg-cover rounded-xl drop-shadow-lg flex flex-col">
          <h1 className="text-5xl text-center">Custom quiz</h1>
          <p className="text-xl py-6 text-center">Customize your learning</p>
          <div className="flex flex-row justify-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const selectedOption = e.target.elements.quizLevel.value;
                const quizLevel = parseInt(selectedOption); // Extract the number from the option value
                generateCustomQuiz(quizLevel);
              }}
            >
              <select
                name="quizLevel"
                className="bg-white border p-3 mx-3 border-gray-300 rounded-lg shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="1" selected>
                  Learning level 1
                </option>
                <option value="2">Learning level 2</option>
                <option value="3">Learning level 3</option>
              </select>
              <button
                type="submit"
                className="bg-green-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
              >
                Custom quiz
              </button>
            </form>
          </div>
        </div>
        <h1 className="text-5xl mt-16 text-center">Past quiz reports</h1>
        {currentUser.quizzes.map((quiz, idx) => (
          <div key={idx} className="w-28 h-28 bg-slate-300 rounded-lg shadow-md flex items-center justify-center">
            <p>Quiz ID: {quiz}</p>
          </div>
        ))}
      </div>
    </>
  );
}

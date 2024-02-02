import React, { useState, useEffect } from "react";
import Heading from "./Heading";

// questionDetails:

export default function Report({ questionDetails }) {
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let total = 0;
    let correctCount = 0;

    questionDetails.forEach((queData) => {
      //  total++;
      if (queData.type === "mtf") {
        queData.column1.forEach((_, colIndex) => {
          total++;
          if (
            queData.optionsSelected[colIndex] ===
            queData.correctOptions[colIndex]
          ) {
            correctCount++;
          }
        });
      } else if (queData.type === "ln") {
        total++;
        if (queData.optionSelected === queData.correctOptions) {
          correctCount++;
        }
      } else if (queData.type === "ftb") {
        queData.column1.forEach((_, colIndex) => {
          total++;
          if (
            queData.optionsWritten[colIndex] ===
            queData.correctOptions[colIndex]
          ) {
            correctCount++;
          }
        });
      }
    });

    setTotalQuestions(total);
    setCorrectAnswers(correctCount);
    setScore(Math.round(correctCount * 5));
  }, [questionDetails]);

  console.log(totalQuestions, correctAnswers);
  return (
    <div className="  min-h-screen min-w-screen flex flex-col items-center">
      <h1 className=" text-5xl mb-8 mt-48 font-black">Report</h1>

      <div className=" w-full h-16 px-12 flex flex-row justify-center">
        <div className=" mx-8 border border-solid border-gray-200 rounded-md w-64 h-32 bg-slate-100 text-3xl flex flex-col items-center justify-center text-center drop-shadow-lg">
          <p>Points scored:</p>
          <p>
            <span className="text-5xl">{score}</span>/{totalQuestions * 5}{" "}
          </p>
        </div>
        <div className=" mx-8 border border-solid border-gray-200 rounded-md w-64 h-32 bg-slate-100 text-3xl flex flex-col items-center justify-center text-center drop-shadow-lg">
          <p>Accuracy:</p>
          <p>
            <span className="text-5xl">
              {Math.round((correctAnswers / totalQuestions) * 100)}
            </span>
            %{" "}
          </p>
        </div>
      </div>

      <div className="mt-36 pb-6  text-5xl font-black">Questions Review</div>
      <div className=" w-full p-4 mt-4">
        {questionDetails.map((queData, index) => (
          <div
            key={index}
            className=" bg-slate-100 border mx-36 border-slate-200 drop-shadow-lg rounded-lg mb-10 "
          >
            <h1 className=" ml-4 text-2xl font-semibold mt-5 mb-5">
              {/* Question {index + 1}. {queData.questionStatement} */}
              <Heading
                questionNo={index + 1}
                questionStatement={queData.questionStatement}
              />
            </h1>

            {queData.type === "mtf" ? (
              <div className="ml-16">
                {queData.column1.map((item, colIndex) => (
                  <div
                    key={colIndex}
                    className={`${
                      queData.optionsSelected[colIndex] ===
                      queData.correctOptions[colIndex]
                        ? "correct-answer"
                        : "incorrect-answer"
                    }flex flex-col p-4 rounded-md mb-4`}
                  >
                    <div className=" flex items-center space-x-36 ">
                      <div className=" text-2xl border rounded-md border-solid bg-white w-48 h-20 flex items-center justify-center">
                        {item}=?
                      </div>
                      <div>
                        <div className="text-xl text-black">
                          <span className="text-cyan-600">You marked:</span>{" "}
                          {queData.optionsSelected[colIndex]}
                        </div>
                        <div>
                          {queData.optionsSelected[colIndex] ===
                          queData.correctOptions[colIndex] ? (
                            <span className="text-green-500 mt-2 text-xl">
                              Your Answer is correct!
                            </span>
                          ) : (
                            <span className="text-red-500 mt-2 text-xl">
                              Wrong Answer! Correct answer:{" "}
                              {queData.correctOptions[colIndex]}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : queData.type === "ln" ? (
              <div className="ml-16">
                <div className="flex justify-between p-4 rounded-md mb-4">
                  {queData.optionsGiven.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className=" text-2xl border rounded-md border-solid bg-white w-48 h-20 flex items-center justify-center"
                    >
                      {option}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center p-4 rounded-md">
                  <span
                    className={`text-xl font-bold ${
                      queData.optionSelected === queData.correctOptions
                        ? "text-green-500" // Green color for correct answer
                        : "text-red-500" // Red color for wrong answer
                    }`}
                  >
                    {queData.optionSelected === queData.correctOptions
                      ? "Your Answer is correct!"
                      : `Wrong Answer! Correct answer: ${queData.correctOptions}`}
                  </span>
                  {queData.optionSelected && ( // Check if an option was selected
                    <div className="ml-4 text-xl text-black">
                      <span className="text-cyan-600">You marked:</span>{" "}
                      {queData.optionSelected}
                    </div>
                  )}
                </div>
              </div>
            ) : queData.type === "ftb" ? (
              <div className="ml-16">
                <div className="flex flex-col mb-4">
                  {queData.column1.map((item, colIndex) => (
                    <div
                      key={colIndex}
                      className="text-2xl mb-2 flex items-center"
                    >
                      <div className=" text-2xl border rounded-md border-solid bg-white w-48 h-20 flex items-center justify-center">
                        {item} = {queData.optionsWritten[colIndex]}
                      </div>
                      <div>
                        {queData.optionsWritten[colIndex] ===
                        queData.correctOptions[colIndex] ? (
                          <span className="text-green-500 ml-2">
                            {" "}
                            Your Answer is correct
                          </span>
                        ) : (
                          <span className="text-red-500 ml-2">
                            Wrong Answer! Correct answer is :{" "}
                            {queData.correctOptions[colIndex]}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

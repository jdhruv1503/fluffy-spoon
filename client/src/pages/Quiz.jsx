import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LargestNumber from "../components/Questions/LargestNumber";
import FillInTheBlanks from "../components/Questions/FillInTheBlanks";
import MatchTheFollowing from "../components/Questions/MatchTheFollowing";

export default function Quiz({}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  let questionsArray = [
    { type: "choose_largest", options: [1, 2, 3, 4], correct: 3 },
    {
      type: "fitb",
      questions: ["10+10 = ", "10+10 = ", "10+10 = ", "10+10 = "],
      correct: [20, 20, 20, 20],
    },
    { type: "choose_largest", options: [1, 2, 3, 4], correct: 3 },
    { type: "choose_largest", options: [1, 2, 3, 4], correct: 3 },
    {
      type: "fitb",
      questions: ["10+10 = ", "10+10 = ", "10+10 = ", "10+10 = "],
      correct: [20, 20, 20, 20],
    },
    { type: "choose_largest", options: [1, 2, 3, 4], correct: 3 },
    {
      type: "mtf",
      pairs: [
        ["23+48", "21"],
        ["45+16", "37"],
        ["13+24", "71"],
        ["12+9", "61"],
      ],
      correct: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
    },
  ];

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleSubmit = () => {};

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < questionsArray.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <>
      <Sidebar
        qNo={questionsArray.length}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <div className=" min-h-screen w=[90vw] ml-[10vw] flex flex-col justify-center items-center ">
        <div className="w-[50%]">
          {questionsArray.map((question, index) => {
            if (index !== selectedIndex) {
              return (
                <div
                  key={index}
                  className="w-full h-full opacity-0 transition-opacity duration-300"
                >
                  {/* Render the question component here */}
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="w-full h-full opacity-100 transition-opacity duration-300"
                >
                  {question.type === "choose_largest" && (
                    <LargestNumber
                      key={index}
                      queNo={index + 1}
                      questionDetails={question}
                    />
                  )}

                  {question.type === "fitb" && (
                    <FillInTheBlanks
                      key={index}
                      queNo={index + 1}
                      questionDetails={question}
                    />
                  )}

                  {question.type === "mtf" && (
                    <MatchTheFollowing
                      key={index}
                      queNo={index + 1}
                      questionDetails={question}
                    />
                  )}
                </div>
              );
            }
          })}
          <div className="grid grid-cols-2 grid-rows-1 auto-cols-min">
            {selectedIndex > 0 ? (
              <button
                className="display-grid border border-solid border-gray-200 rounded-md text-lg bg-slate-100 text-black px-4 py-2 my-16 right-0 rounded mr-2 w-32 justify-self-start drop-shadow-lg"
                onClick={handlePrevious}
              >
                Previous
              </button>
            ) : (
              <div></div>
            )}
            {selectedIndex < questionsArray.length - 1 ? (
              <button
                className="display-grid border border-solid border-gray-200 rounded-md text-lg bg-slate-100 text-black px-4 py-2 my-16 rounded w-32 justify-self-end drop-shadow-lg"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                className="display-grid border border-solid border-green-800 rounded-md text-lg bg-green-700 text-white px-4 py-2 my-16 rounded w-32 justify-self-end drop-shadow-lg"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

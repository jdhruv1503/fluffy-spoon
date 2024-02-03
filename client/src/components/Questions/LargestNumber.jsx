import React, { useState } from "react";
import Heading from "./Heading";

export default function LargestNumber({
  queNo,
  questionArray,
  setQuestionArray,
}) {
  const changeHandler = (e, option) => {
    setQuestionArray((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[queNo - 1].optionSelected = option;
      return updatedAnswers;
    });
  };

  return (
    <div>
      <Heading
        questionNo={queNo}
        questionStatement="Choose the largest number from the given numbers"
      />
      <div className="mt-10 flex px-3 min-w-full justify-between">
        {questionArray[queNo - 1].options.map((option, index) => (
          <button
            key={index}
            onClick={(e) => changeHandler(e, option)}
            className={`border border-solid border-gray-200 rounded-md w-48 h-32 text-3xl flex items-center justify-center text-center drop-shadow-lg ${
              questionArray[queNo - 1].optionSelected === option
                ? "bg-green-200"
                : "bg-slate-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

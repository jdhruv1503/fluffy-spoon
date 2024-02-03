import React, { useState } from "react";
import Heading from "./Heading";

// props have {} object. which has {type : 'ln' (no use), options=[1,2,3,4]}

export default function FillInTheBlanks({
  queNo,
  questionDetails,
  handleClick,
}) {
  const [answers, setAnswers] = useState(new Array(4).fill(""));

  const changeHandler = (e, index) => {
    const value = e.target.value;
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = value;
      return updatedAnswers;
    });
    handleClick(queNo, answers);
  };

  return (
    <div className="px-12">
      <Heading questionNo={queNo} questionStatement="Fill in the blanks" />
      <div className=" mt-10 flex flex-col grow gap-y-2 px-3 min-w-full justify-between">
        {questionDetails.questions.map((question, index) => (
          <div
            key={index}
            className="border border-solid border-gray-200 rounded-md px-8 py-2 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg"
          >
            <p className="pr-16">{question}</p>
            <input
              style={{
                "-webkit-appearance": "none",
                "-moz-appearance": "textfield",
              }}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                  handleOptionClick(option)
                }
              }}
              onChange={(e) => changeHandler(e, index)}
              type="number"
              value={questionDetails.optionsWritten[index]}
              className="text-center bg-transparent border-transparent border-b-2 border-b-gray-300 border-l-0 border-r-0 border-t-0 focus:border-gray-600 focus:outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

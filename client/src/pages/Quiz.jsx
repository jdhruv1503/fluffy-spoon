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
      column1: ["10+10 = ", "20+10 = ", "30+10 = ", "40+10 = "],
      column2: ["20", "30", "40", "50"],
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

  return (
    <>
      <Sidebar qNo={questionsArray.length} onSelect={handleSelect} />
      {questionsArray.map((question, index) => {
        if (index !== selectedIndex) return null;

        switch (question.type) {
          case "choose_largest":
            return (
              <LargestNumber
                key={index}
                queNo={index + 1}
                questionDetails={question}
              />
            );
          case "fitb":
            return (
              <FillInTheBlanks
                key={index}
                queNo={index + 1}
                questionDetails={question}
              />
            );
          case "mtf":
            return (
              <MatchTheFollowing
                key={index}
                queNo={index + 1}
                questionDetails={question}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}

import React, { useState } from "react";
import Heading from "./Heading";

export default function MatchTheFollowing({
  queNo,
  questionArray,
  setQuestionArray,
}) {
  const [prevSelect, setPrevSelect] = useState({ colNum: -1, idx: -1 });
  const colors = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-pink-200"];
  const colors2 = [
    "bg-orange-200",
    "bg-yellow-100",
    "bg-green-300",
    "bg-blue-300",
  ];

  function handleClick(colN, idxx) {
    if (prevSelect.colNum === -1) {
      // No previous selection, handle initial selection
      if (colN === 1) {
        setQuestionArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[queNo - 1].colorsCol1[idxx] = colors[idxx];
          return newArray;
        });
      }
      if (colN === 2) {
        setQuestionArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[queNo - 1].colorsCol2[idxx] = colors[idxx];
          return newArray;
        });
      }
      setPrevSelect({ colNum: colN, idx: idxx });
    } else if (prevSelect.colNum === colN) {
      // Same column selected again, toggle colors
      if (colN === 1) {
        setQuestionArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[queNo - 1].colorsCol1[idxx] = colors[idxx];
          if (prevSelect.idx !== idxx)
            newArray[queNo - 1].colorsCol1[prevSelect.idx] = "bg-slate-50";
          else if (prevArray[queNo - 1].colorsCol1[idxx] === "bg-slate-50")
            newArray[queNo - 1].colorsCol1[idxx] = colors[idxx];
          else newArray[queNo - 1].colorsCol1[idxx] = "bg-slate-50";
          return newArray;
        });
      }
      if (colN === 2) {
        setQuestionArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[queNo - 1].colorsCol2[idxx] = colors2[idxx];
          if (prevSelect.idx !== idxx)
            newArray[queNo - 1].colorsCol2[prevSelect.idx] = "bg-slate-50";
          else if (prevArray[queNo - 1].colorsCol2[idxx] === "bg-slate-50")
            newArray[queNo - 1].colorsCol2[idxx] = colors2[idxx];
          else newArray[queNo - 1].colorsCol2[idxx] = "bg-slate-50";
          return newArray;
        });
      }
      setPrevSelect({ colNum: colN, idx: idxx });
    } else {
      // Different column selected, handle connection and reset
      if (colN === 1) {
        // Connect column 1 to column 2
        setQuestionArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[queNo - 1].colorsCol1[idxx] =
            questionArray[queNo - 1].colorsCol2[prevSelect.idx];
          return newArray;
        });
        drawLine(colN, idxx);
      }
      if (colN === 2) {
        // Connect column 2 to column 1
        setQuestionArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[queNo - 1].colorsCol2[idxx] =
            questionArray[queNo - 1].colorsCol1[prevSelect.idx];
          return newArray;
        });
        // Draw line if colN is 2 and prevSelect.colNum is 1
        drawLine(colN, idxx);
      }
      if (prevSelect.colNum !== -1 && prevSelect.colNum !== colN) {
        // Different column selected, handle connection and reset
        const newConnection = [prevSelect.idx, idxx];
        setQuestionArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[queNo - 1].optionsWritten.push(newConnection);
          return newArray;
        });
        // setPrevSelect({ colNum: -1, idx: -1 });
      }
      setPrevSelect({ colNum: -1, idx: -1 });
    }
  }

  // ... (remaining code)

  function drawLine(colN, idxx) {
    // Filter out existing lines for the current option in both columns
    const updatedLines = questionArray[queNo - 1].lineCoordinates.filter(
      (line) =>
        !(
          line.colN === colN &&
          (line.fromIdx === prevSelect.idx || line.toIdx === idxx)
        )
    );

    const rect1 = document
      .querySelector(`[col="${prevSelect.colNum}"][indx="${prevSelect.idx}"]`)
      .getBoundingClientRect();
    const rect2 = document
      .querySelector(`[col="${colN}"][indx="${idxx}"]`)
      .getBoundingClientRect();

    let x1 = 0,
      y1 = 0,
      x2 = 0,
      y2 = 0;
    if (colN == 2) {
      x1 = rect1.x + rect1.width;
      y1 = rect1.y + rect1.height / 2;

      x2 = rect2.x;
      y2 = rect2.y + rect2.height / 2;
      // const newLine = { x1, y1, x2, y2, colN, fromIdx: prevSelect.idx, toIdx: idxx };
      // updatedLines.push(newLine);
    } else {
      x1 = rect2.x + rect2.width;
      y1 = rect2.y + rect2.height / 2;

      x2 = rect1.x;
      y2 = rect1.y + rect1.height / 2;

      // I think ye newline ko update karne se ho jaayega par nahi hua. check again
      // const newLine = { x1, y1, x2, y2, colN, fromIdx: idxx, toIdx: prevSelect.idx };
      // updatedLines.push(newLine);
      // console.log(x1,x2,y1,y2)
    }
    // Add the latest line to the array
    const newLine = {
      x1,
      y1,
      x2,
      y2,
      colN,
      fromIdx: prevSelect.idx,
      toIdx: idxx,
    };
    updatedLines.push(newLine);

    // Update the state with the latest lines
    setQuestionArray((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[queNo - 1].lineCoordinates = updatedLines;
      return updatedAnswers;
    });
  }

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center mb-[-14rem]">
      <div>
        <Heading questionNo={queNo} questionStatement="Match the following" />

        <div className="mt-10 flex flex-col space-y-3 px-3 min-w-full justify-between ">
          <svg className="absolute top-0 left-0 h-screen w-screen z-[-1]">
            {questionArray[queNo - 1].lineCoordinates.map((line, index) => (
              <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="black"
              />
            ))}
          </svg>
          {questionArray[queNo - 1].pairs.map((keyss, idx) => (
            <div key={idx} className=" flex justify-between">
              <div
                className={`border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center ${
                  questionArray[queNo - 1].colorsCol1[idx]
                }  drop-shadow-lg`}
                col={1}
                indx={idx}
                onClick={() => handleClick(1, idx)}
              >
                {keyss[0]}
              </div>
              <div
                className={`border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center ${
                  questionArray[queNo - 1].colorsCol2[idx]
                } drop-shadow-lg`}
                col={2}
                indx={idx}
                onClick={() => handleClick(2, idx)}
              >
                {keyss[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// what's left????
// 1. When u unselect an option by selcting anothe roption of the same column then bg-slate-50
// 2. Two lines are coming when origin is not same.

import React from "react";
import { useState } from "react";

// I want that in this sidebar whicever question is selected/solved, it should be highlighted with a different color preferably green

function SidebarBox({ text, selected, filled, onClick }) {
  return (
    <button
      className={`text-lg w-[80%] text-center mx-4 py-1 rounded-md border border-solid border-gray-200 drop-shadow-md ${
        selected ? "bg-blue-100" : filled ? "bg-green-100" : "bg-slate-100"
      }`}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
}

export default function Sidebar({
  qNo,
  selectedIndex,
  setSelectedIndex,
  questionArray,
}) {
  const isSelectedFTB = (i) => {
    let len = 0;
    questionArray[i].optionsWritten.map((option) => (len += option.length));

    if (len > 0) {
      return true;
    }
    return false;
  };
  const isFilled = (i) => {
    if (questionArray[i].type === "ln") {
      if (typeof questionArray[i].optionSelected == "number") {
        return true;
      } else {
        return false;
      }
    }
    if (questionArray[i].type === "ftb") {
      if (isSelectedFTB(i)) {
        return true;
      } else {
        return false;
      }
    }
    if (questionArray[i].type === "mtf") {
      if (questionArray[i].optionsWritten.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <div className="absolute bg-slate-50 border border-solid border-gray-200 h-[80%] mt-[5%] w-[18%] rounded-lg drop-shadow-md overflow-auto">
      <div className="flex flex-col w-full h-full items-center justify-center space-y-2">
        {Array.from({ length: qNo }).map((_, i) => (
          <SidebarBox
            key={i}
            text={`Question ${i + 1}`}
            selected={i === selectedIndex}
            filled={isFilled(i)}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

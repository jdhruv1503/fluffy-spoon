import React from "react";
import { useState } from "react";

function SidebarBox({ text, selected, onClick }) {
  return (
    <button
      className={`bg-slate-100 text-lg w-[80%] text-center mx-4 py-1 rounded-md border border-solid border-gray-200 drop-shadow-md ${
        selected ? "bg-blue-200" : ""
      }`}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
}

export default function Sidebar({ qNo, onSelect }) {
  const [selectedBox, setSelectedBox] = useState(0);

  return (
    <div className="absolute bg-slate-50 border border-solid border-gray-200 h-[80%] mt-[5%] w-[18%] rounded-lg drop-shadow-md overflow-auto">
      <div className="flex flex-col w-full h-full items-center justify-center space-y-2">
        {Array.from({ length: qNo }).map((_, i) => (
          <SidebarBox
            key={i}
            text={`Question ${i + 1}`}
            selected={i === selectedBox}
            onClick={() => {
              setSelectedBox(i);
              onSelect(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}

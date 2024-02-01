import React, { useState } from "react";
import Heading from "./Heading";

export default function MatchTheFollowing({ queNo, questionDetails }) {
  const [selectedOption, setSelectedoption] = useState([-1, -1]);

  return (
    <div className="min-w-4xl">
      <Heading questionNo={queNo} questionStatement="Match the following" />
      <div className=" mt-10 w-108rem h-69.8125rem flex flex-col space-y-3 px-3 min-w-full justify-between ">
        {questionDetails.pairs.map((keyss, idx) => (
          <div className=" flex justify-between">
            <div
              className="border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg"
              key={idx}
            >
              {keyss[0]}
            </div>
            <div
              className="border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg"
              key={idx}
            >
              {keyss[1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import Heading from "./Heading";

// props have {} object. which has {type : 'ln' (no use), options=[1,2,3,4]}

export default function LargestNumber({ queNo, questionDetails }) {
  return (
    <div className=" min-h-screen min-w-screen flex flex-col items-center justify-center ">
      <div>
        <Heading
          questionNo={queNo}
          questionStatement="Choose the largest number from the given numbers"
        />
        <div className=" mt-10 flex px-3 min-w-full justify-between">
          <div className="border border-solid border-gray-200 rounded-md w-48 h-32 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg">
            {questionDetails.options[0]}
          </div>
          <div className="border border-solid border-gray-200 rounded-md w-48 h-32 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg">
            {questionDetails.options[1]}
          </div>
          <div className="border border-solid border-gray-200 rounded-md w-48 h-32 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg">
            {questionDetails.options[2]}
          </div>
          <div className="border border-solid border-gray-200 rounded-md w-48 h-32 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg">
            {questionDetails.options[3]}
          </div>
        </div>
      </div>
    </div>
  );
}

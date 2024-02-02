import React from "react";

// questionDetails:

export default function Report({ questionDetails }) {
  return (
    <div className="  min-h-screen min-w-screen flex flex-col items-center">
      <h1 className=" text-5xl mt-20 mb-8">Report</h1>
      <div className=" w-full h-16  flex justify-between">
        <div className=" ml-4 text-xl">Points scored : 80/100 </div>
        <div className=" mr-4 text-xl">Accuracy: 80 %</div>
      </div>
      <div className=" text-2xl">Review</div>
      {/* <div className=' bg-blue-300 w-64 h-20' >hehe</div> */}
      <div className=" w-full p-4 mt-4">
        {questionDetails.map((queData, index) => (
          <div key={index}>
            <h1 className=" text-2xl font-semibold">
              Question {index + 1}. {queData.questionStatement}
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
                    } bg-slate-200 flex justify-between p-4 rounded-md mb-4`}
                  >
                    {item}{" "}
                    <span className=" text-xl text-black">
                      <span className=" text-cyan-600">You marked:</span>{" "}
                      {queData.optionsSelected[colIndex]}
                    </span>
                    {queData.optionsSelected[colIndex] ===
                    queData.correctOptions[colIndex] ? (
                      <span className="text-green-500 ml-2 text-xl">
                        Your Answer is correct!
                      </span>
                    ) : (
                      <span className="text-red-500 ml-2 text-xl">
                        Wrong Answer! Correct answer:{" "}
                        {queData.correctOptions[colIndex]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : queData.type === "ln" ? (
              <div className="ml-16">
                <div className="flex justify-between p-4 rounded-md mb-4">
                  {queData.optionsGiven.map((option, optionIndex) => (
                    <span
                      key={optionIndex}
                      className=" text-xl border-gray-200 rounded-md w-48 h-32"
                    >
                      {option}
                    </span>
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
                      : `Your Answer is wrong! Correct answer: ${queData.correctOptions}`}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                {queData.column1.map((item, colIndex) => (
                  <div key={colIndex}>{/* render column1 items here */}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

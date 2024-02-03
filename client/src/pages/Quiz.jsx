import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import LargestNumber from "../components/Questions/LargestNumber";
import FillInTheBlanks from "../components/Questions/FillInTheBlanks";
import MatchTheFollowing from "../components/Questions/MatchTheFollowing";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Quiz({}) {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [questionsArray, setQuizData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const handleOptionClick = (index, option) => {
    let questionsArray2 = questionsArray;

    if (questionsArray2[index].type == "ln") {
      questionsArray2[index].optionSelected = option;
      setQuizData(questionsArray2);
    }
    if (questionsArray2[index].type == "ftb") {
      questionsArray2[index].optionsWritten = option;
      setQuizData(questionsArray2);
      console.log("set the options written");
    }
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleSubmit = async () => {
    const formData = { quiz: questionsArray };
    const res = await fetch(`/api/quiz/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    navigate(`/report?id=${id}`);
  };

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

  useEffect(() => {
    if (id) {
      fetch(`/api/quiz/get/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setQuizData(data.quiz);
          console.log(data.quiz);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    }
  }, [id]);

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
                  {question.type === "ln" && (
                    <LargestNumber
                      key={index}
                      queNo={index + 1}
                      handleClick={handleOptionClick}
                      questionDetails={questionsArray[index]}
                    />
                  )}

                  {question.type === "ftb" && (
                    <FillInTheBlanks
                      key={index}
                      queNo={index + 1}
                      handleClick={handleOptionClick}
                      questionDetails={questionsArray[index]}
                    />
                  )}

                  {question.type === "mtf" && (
                    <MatchTheFollowing
                      key={index}
                      queNo={index + 1}
                      handleClickback={handleOptionClick}
                      questionDetails={questionsArray[index]}
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

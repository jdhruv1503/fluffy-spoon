import React from "react";
import Sidebar from "../components/Sidebar";
import FillInTheBlanks from "../components/Questions/FillInTheBlanks";

export default function Quiz() {
  return (
    <>
      <Sidebar qNo={10} />
      <FillInTheBlanks
        queNo={1}
        questionDetails={{
          questions: ["1+1 = ", "1+1 = ", "1+1 = ", "1+1 = "],
        }}
      />
    </>
  );
}

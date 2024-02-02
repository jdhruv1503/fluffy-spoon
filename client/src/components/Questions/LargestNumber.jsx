// import React from "react";
// import Heading from "./Heading";

// // props have {} object. which has {type : 'ln' (no use), options=[1,2,3,4]}

// export default function LargestNumber({ queNo, questionDetails }) {
//   return (
//     <div>
//       <Heading
//         questionNo={queNo}
//         questionStatement="Choose the largest number from the given numbers"
//       />
//       <div className="mt-10 flex px-3 min-w-full justify-between">
//         {questionDetails.options.map((option, index) => (
//           <div
//             key={index}
//             onClick={() => handleOptionClick(option)}
//             className={`border border-solid border-gray-200 rounded-md w-48 h-32 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg ${
//               selectedOption === option ? 'bg-green-500' : ''
//             }`}
//           >
//             {option}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import Heading from "./Heading";

export default function LargestNumber({ queNo, questionDetails }) {
 const [selectedOption, setSelectedOption] = useState(null);

 const handleOptionClick = (option) => {
    setSelectedOption(option);
 };

 return (
    <div>
      <Heading
        questionNo={queNo}
        questionStatement="Choose the largest number from the given numbers"
      />
      <div className="mt-10 flex px-3 min-w-full justify-between">
        {questionDetails.options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`border border-solid border-gray-200 rounded-md w-48 h-32 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg ${
              selectedOption === option ? 'bg-green-500' : ''
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
 );
}
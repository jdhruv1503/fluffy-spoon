// import React from "react";
// import Heading from './Heading'

// // assuming we are getting {type:"mtf", coloum1:(it will contain string make the string in some other file in which you are calling this) ["23+48","45+16","13+24","12+9"], similarly column 2:{}}

// export default function MatchTheFollowing({queNo,questionDetails}) {
//   return (
//     <div className=' min-h-screen min-w-screen flex flex-col justify-center bg-amber-100 ' >
//         <div>
//             <Heading questionNo={queNo} questionStatement="Match the following"/>
//             <div className=' mt-10 w-108rem h-69.8125rem flex flex-col space-y-3 px-3 min-w-full justify-between bg-slate-200 '>

//               {questionDetails.options.map((key)=>(
//                 <div className=' bg-pink-200 flex justify-between'>
//                   <div className='border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg'>{key}</div>
//                   <div className='border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg'>{key}</div>
//                 </div>
//               ))}
//             </div>
//         </div>
//     </div>
//   )
// }

import React, { useState } from "react";
import Heading from "./Heading";
export default function MatchTheFollowing({ queNo, questionDetails }) {
  const [selectedOption, setSelectedoption] = useState([-1, -1]);

  return (
    <div className=" min-h-screen min-w-screen flex flex-col justify-center bg-amber-100 ">
      <div>
        <Heading questionNo={queNo} questionStatement="Match the following" />
        <div className=" mt-10 w-108rem h-69.8125rem flex flex-col space-y-3 px-3 min-w-full justify-between bg-slate-200 ">
          <div className="border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg">
            {questionDetails.column1[0]}
          </div>
          <div className="border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg">
            {questionDetails.column1[1]}
          </div>
          <div className="border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg">
            {questionDetails.column1[2]}
          </div>
          <div className="border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg">
            {questionDetails.column1[3]}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react'
import Heading from './Heading'

export default function MatchTheFollowing({queNo,questionDetails}) {
  const [selectedOption,setSelectedoption]=useState([-1,-1]);


  return (
    <div className=' min-h-screen min-w-screen flex flex-col justify-center bg-amber-100 ' >
        <div>
            <Heading questionNo={queNo} questionStatement="Match the following"/>
            <div className=' mt-10 w-108rem h-69.8125rem flex flex-col space-y-3 px-3 min-w-full justify-between bg-slate-200 '>
              
              {questionDetails.pairs.map((keyss,idx)=>(
                <div className=' bg-pink-200 flex justify-between'>
                  <div className='border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg' key={idx} >{keyss[0]}</div>
                  <div className='border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg' key={idx} >{keyss[1]}</div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}




// import React, { useState } from 'react';
// import Heading from './Heading';

// export default function MatchTheFollowing({ queNo, questionDetails }) {
//  const [selectedOptions, setSelectedOptions] = useState([null, null]);
//  const [matchedPairs, setMatchedPairs] = useState([]);
// //  console.log(selectedOptions)
// //  console.log(matchedPairs)

//  const handleOptionSelect = (columnIndex, optionIndex) => {
//     setSelectedOptions(prevSelectedOptions => {
//       const newSelectedOptions = [...prevSelectedOptions];
//       newSelectedOptions[columnIndex] = optionIndex;
//       return newSelectedOptions;
//     });

//     const otherColumnIndex = (columnIndex + 1) % 2;
//     if (selectedOptions[otherColumnIndex] !== null && 
//         questionDetails.column1[selectedOptions[0]] === questionDetails.column2[selectedOptions[1]]) {
//       setMatchedPairs(prevMatchedPairs => [...prevMatchedPairs, [selectedOptions[0], selectedOptions[1]]]);
//     } else if (matchedPairs.some(pair => pair.includes(optionIndex))) {
//       setMatchedPairs(prevMatchedPairs => prevMatchedPairs.filter(pair => !pair.includes(optionIndex)));
//     }
//  };

//  return (
//     <div className='min-h-screen min-w-screen flex flex-col justify-center bg-amber-100'>
//       <div>
//         <Heading questionNo={queNo} questionStatement="Match the following" />
//         <div className='mt-10 w-108rem h-69.8125rem flex flex-col space-y-3 px-3 min-w-full justify-between bg-slate-200'>
//           <div className='flex justify-between'>
//             {questionDetails.column1.map((item, index) => (
//               <div
//                 key={index}
//                 className={`bg-pink-200 flex justify-between ${
//                  selectedOptions[0] === index || matchedPairs.some(pair => pair.includes(index)) ? 'selected' : ''
//                 }`}
//                 onClick={() => handleOptionSelect(0, index)}
//               >
//                 <div className='border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg'>{item}</div>
//               </div>
//             ))}
//           </div>
//           <div className='flex justify-between'>
//             {questionDetails.column2.map((item, index) => (
//               <div
//                 key={index}
//                 className={`bg-pink-200 flex justify-between ${
//                  selectedOptions[1] === index || matchedPairs.some(pair => pair.includes(index)) ? 'selected' : ''
//                 }`}
//                 onClick={() => handleOptionSelect(1, index)}
//               >
//                 <div className='border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center bg-slate-50 drop-shadow-lg'>{item}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//  );
// }

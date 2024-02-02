
// Single line from single option
// import React, { useState } from 'react';
// import Heading from './Heading';

// export default function MatchTheFollowing({ queNo, questionDetails }) {
//   const [prevSelect, setPrevSelect] = useState({ colNum: -1, idx: -1 });
//   const [colorsCol1, setColorsCol1] = useState(['bg-slate-50', 'bg-slate-50', 'bg-slate-50', 'bg-slate-50']);
//   const [colorsCol2, setColorsCol2] = useState(['bg-slate-50', 'bg-slate-50', 'bg-slate-50', 'bg-slate-50']);
//   const [lineCoordinates, setLineCoordinates] = useState([]);

//   const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-pink-200'];
//   const colors2 = ['bg-orange-200', 'bg-yellow-100', 'bg-green-300', 'bg-blue-300'];


// function handleClick(colN, idxx) {
//   if (prevSelect.colNum === -1) {
//     // No previous selection, handle initial selection
//     if (colN === 1) {
//       setColorsCol1((prevColors) => {
//         const newColors = [...prevColors];
//         newColors[idxx] = colors[idxx];
//         return newColors;
//       });
//     }
//     if (colN === 2) {
//       setColorsCol2((prevColors) => {
//         const newColors = [...prevColors];
//         newColors[idxx] = colors2[idxx];
//         return newColors;
//       });
//     }
//     setPrevSelect({ colNum: colN, idx: idxx });
//   } else if (prevSelect.colNum === colN) {
//     // Same column selected again, toggle colors
//     if (colN === 1) {
//       setColorsCol1((prevColors) => {
//         const newColors = [...prevColors];
//         newColors[idxx] = colors[idxx];
//         if (prevSelect.idx !== idxx) newColors[prevSelect.idx] = 'bg-slate-50';
//         else if (prevColors[idxx] === 'bg-slate-50') newColors[idxx] = colors[idxx];
//         else newColors[idxx] = 'bg-slate-50';
//         return newColors;
//       });
//     }
//     if (colN === 2) {
//       setColorsCol2((prevColors) => {
//         const newColors = [...prevColors];
//         newColors[idxx] = colors2[idxx];
//         if (prevSelect.idx !== idxx) newColors[prevSelect.idx] = 'bg-slate-50';
//         else if (prevColors[idxx] === 'bg-slate-50') newColors[idxx] = colors2[idxx];
//         else newColors[idxx] = 'bg-slate-50';
//         return newColors;
//       });
//     }
//     setPrevSelect({ colNum: colN, idx: idxx });
//   } else {
//     // Different column selected, handle connection and reset
//     if (colN === 1) {
//       // Connect column 1 to column 2
//       setColorsCol1((prevColors) => {
//         const newColors = [...prevColors];
//         newColors[idxx] = colorsCol2[prevSelect.idx];
//         return newColors;
//       });
//       drawLine(colN, idxx);
//     }
//     if (colN === 2) {
//       // Connect column 2 to column 1
//       setColorsCol2((prevColors) => {
//         const newColors = [...prevColors];
//         newColors[idxx] = colorsCol1[prevSelect.idx];
//         return newColors;
//       });
//       // Draw line if colN is 2 and prevSelect.colNum is 1
//       drawLine(colN, idxx);
//     }
//     setPrevSelect({ colNum: -1, idx: -1 });
//   }
// }

// // ... (remaining code)

  

//   function drawLine(colN, idxx) {
//     // Filter out existing lines for the current option in both columns
//     const updatedLines = lineCoordinates.filter(
//       (line) => !(line.colN === colN && (line.fromIdx === prevSelect.idx || line.toIdx === idxx))
//     );
  
//     const rect1 = document.querySelector(`[col="${prevSelect.colNum}"][indx="${prevSelect.idx}"]`).getBoundingClientRect();
//     const rect2 = document.querySelector(`[col="${colN}"][indx="${idxx}"]`).getBoundingClientRect();
  
//     const xoffset = 420;
//     const yoffset = 369.5;

//     let x1=0,y1=0,x2=0,y2=0;
//     if (colN==2){
//       x1 = rect1.x - xoffset + rect1.width + 14;
//       y1 = rect1.y - yoffset + rect1.height;
    
//       x2 = rect2.x - xoffset + 24;
//       y2 = rect2.y - yoffset + rect2.height;
//     }
//     else{
//       x1 = rect2.x - xoffset +14+rect2.width;
//       y1 = rect2.y - yoffset + rect2.height;
    
//       x2 = rect1.x - xoffset+14;
//       y2 = rect1.y - yoffset + rect1.height;
//       // console.log(x1,x2,y1,y2)
//     }
//     // Add the latest line to the array
//     const newLine = { x1, y1, x2, y2, colN, fromIdx: prevSelect.idx, toIdx: idxx };
//     updatedLines.push(newLine);
  
//     // Update the state with the latest lines
//     setLineCoordinates(updatedLines);
//   }
  
  
  

//   return (
//     <div className='min-h-screen min-w-screen flex flex-col justify-center '>
//       <div>
//         <Heading questionNo={queNo} questionStatement="Match the following" />
//         <svg className="absolute bg-slate-200 " width="100%" height="100%" style={{ zIndex: -1 }}>
//           {lineCoordinates.map((line, index) => (
//             <line key={index} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="black" />
//           ))}
//         </svg>

//         <div className='mt-10 w-108rem h-69.8125rem flex flex-col space-y-3 px-3 min-w-full justify-between '>
//           {questionDetails.pairs.map((keyss, idx) => (
//             <div key={idx} className=' flex justify-between'>
//               <div
//                 className={`border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center ${colorsCol1[idx]}  drop-shadow-lg`}
//                 col={1}
//                 indx={idx}
//                 onClick={() => handleClick(1, idx)}
//               >
//                 {keyss[0]}
//               </div>
//               <div
//                 className={`border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center ${colorsCol2[idx]} drop-shadow-lg`}
//                 col={2}
//                 indx={idx}
//                 onClick={() => handleClick(2, idx)}
//               >
//                 {keyss[1]}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// 9808780390


// problems:
// 1. when I have already made a connection but Now I want connection between new option and the prev option then the other coloumn of prev option should turn bg-slate-50.
// also that line connection thing







































import React, { useState } from 'react';
import Heading from './Heading';

export default function MatchTheFollowing({ queNo, questionDetails }) {
  const [prevSelect, setPrevSelect] = useState({ colNum: -1, idx: -1 });
  const [colorsCol1, setColorsCol1] = useState(['bg-slate-50', 'bg-slate-50', 'bg-slate-50', 'bg-slate-50']);
  const [colorsCol2, setColorsCol2] = useState(['bg-slate-50', 'bg-slate-50', 'bg-slate-50', 'bg-slate-50']);
  const [lineCoordinates, setLineCoordinates] = useState([]);

  const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-pink-200'];
  const colors2 = ['bg-orange-200', 'bg-yellow-100', 'bg-green-300', 'bg-blue-300'];


function handleClick(colN, idxx) {
  if (prevSelect.colNum === -1) {
    // No previous selection, handle initial selection
    if (colN === 1) {
      setColorsCol1((prevColors) => {
        const newColors = [...prevColors];
        newColors[idxx] = colors[idxx];
        return newColors;
      });
    }
    if (colN === 2) {
      setColorsCol2((prevColors) => {
        const newColors = [...prevColors];
        newColors[idxx] = colors2[idxx];
        return newColors;
      });
    }
    setPrevSelect({ colNum: colN, idx: idxx });
  } else if (prevSelect.colNum === colN) {
    // Same column selected again, toggle colors
    if (colN === 1) {
      setColorsCol1((prevColors) => {
        const newColors = [...prevColors];
        newColors[idxx] = colors[idxx];
        if (prevSelect.idx !== idxx) newColors[prevSelect.idx] = 'bg-slate-50';
        else if (prevColors[idxx] === 'bg-slate-50') newColors[idxx] = colors[idxx];
        else newColors[idxx] = 'bg-slate-50';
        return newColors;
      });
    }
    if (colN === 2) {
      setColorsCol2((prevColors) => {
        const newColors = [...prevColors];
        newColors[idxx] = colors2[idxx];
        if (prevSelect.idx !== idxx) newColors[prevSelect.idx] = 'bg-slate-50';
        else if (prevColors[idxx] === 'bg-slate-50') newColors[idxx] = colors2[idxx];
        else newColors[idxx] = 'bg-slate-50';
        return newColors;
      });
    }
    setPrevSelect({ colNum: colN, idx: idxx });
  } else {
    // Different column selected, handle connection and reset
    if (colN === 1) {
      // Connect column 1 to column 2
      setColorsCol1((prevColors) => {
        const newColors = [...prevColors];
        newColors[idxx] = colorsCol2[prevSelect.idx];
        return newColors;
      });
      drawLine(colN, idxx);
    }
    if (colN === 2) {
      // Connect column 2 to column 1
      setColorsCol2((prevColors) => {
        const newColors = [...prevColors];
        newColors[idxx] = colorsCol1[prevSelect.idx];
        return newColors;
      });
      // Draw line if colN is 2 and prevSelect.colNum is 1
      drawLine(colN, idxx);
    }
    setPrevSelect({ colNum: -1, idx: -1 });
  }
}

// ... (remaining code)

  

  function drawLine(colN, idxx) {
    // Filter out existing lines for the current option in both columns
    const updatedLines = lineCoordinates.filter(
      (line) => !(line.colN === colN && (line.fromIdx === prevSelect.idx || line.toIdx === idxx))
    );
  
    const rect1 = document.querySelector(`[col="${prevSelect.colNum}"][indx="${prevSelect.idx}"]`).getBoundingClientRect();
    const rect2 = document.querySelector(`[col="${colN}"][indx="${idxx}"]`).getBoundingClientRect();
  
    const xoffset = 420;
    const yoffset = 369.5;

    let x1=0,y1=0,x2=0,y2=0;
    if (colN==2){
      x1 = rect1.x - xoffset + rect1.width + 14;
      y1 = rect1.y - yoffset + rect1.height;
    
      x2 = rect2.x - xoffset + 24;
      y2 = rect2.y - yoffset + rect2.height;
      // const newLine = { x1, y1, x2, y2, colN, fromIdx: prevSelect.idx, toIdx: idxx };
      // updatedLines.push(newLine);
    }
    else{
      x1 = rect2.x - xoffset +14+rect2.width;
      y1 = rect2.y - yoffset + rect2.height;
    
      x2 = rect1.x - xoffset+14;
      y2 = rect1.y - yoffset + rect1.height;

      // I think ye newline ko update karne se ho jaayega par nahi hua. check again
      // const newLine = { x1, y1, x2, y2, colN, fromIdx: idxx, toIdx: prevSelect.idx };
      // updatedLines.push(newLine);
      // console.log(x1,x2,y1,y2)
    }
    // Add the latest line to the array
    const newLine = { x1, y1, x2, y2, colN, fromIdx: prevSelect.idx, toIdx: idxx };
    updatedLines.push(newLine);
  
    // Update the state with the latest lines
    setLineCoordinates(updatedLines);
  }
  
  
  

  return (
    <div className='min-h-screen min-w-screen flex flex-col justify-center '>
      <div>
        <Heading questionNo={queNo} questionStatement="Match the following" />
        <svg className="absolute bg-slate-200 " width="100%" height="100%" style={{ zIndex: -1 }}>
          {lineCoordinates.map((line, index) => (
            <line key={index} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="black" />
          ))}
        </svg>

        <div className='mt-10 w-108rem h-69.8125rem flex flex-col space-y-3 px-3 min-w-full justify-between '>
          {questionDetails.pairs.map((keyss, idx) => (
            <div key={idx} className=' flex justify-between'>
              <div
                className={`border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center ${colorsCol1[idx]}  drop-shadow-lg`}
                col={1}
                indx={idx}
                onClick={() => handleClick(1, idx)}
              >
                {keyss[0]}
              </div>
              <div
                className={`border border-solid border-gray-200 rounded-md w-48 h-20 text-3xl flex items-center justify-center text-center ${colorsCol2[idx]} drop-shadow-lg`}
                col={2}
                indx={idx}
                onClick={() => handleClick(2, idx)}
              >
                {keyss[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



// what's left????
// 1. When u unselect an option by selcting anothe roption of the same column then bg-slate-50
// 2. Two lines are coming when origin is not same.
import React from 'react';
// import LargestNumber from '../components/Questions/LargestNumber';
// import MatchTheFollowing from '../components/Questions/MatchTheFollowing';
import Sidebar from '../components/Sidebar';
import DashBoard from '../components/Questions/DashBoard';
import Report from '../components/Questions/Report';

export default function Home() {
  // console.log("hi")

  const questionDetails = [
    {
      type: 'mtf',
      questionStatement: 'Match the Following',
      column1: ["23+48", "45+16", "13+24", "12+9"],
      // column2: ['1', '2', '3', '4'],
      optionsSelected: ['71', '37', '21', '61'],
      correctOptions: ['71', '61', '37', '21'],
    },
    {
      type: 'ln',
      questionStatement: 'Select the Largest Number',
      optionsGiven: ['36', '54', '27', '89'],
      optionsSelected: ['89'],
      correctOptions: ['89'],
    },
  ];

  return (
    <>
    {/* <Sidebar qNo={5} /> */}
    <div className='px-4 mx-auto max-w-4xl'>
      {/* <LargestNumber queNo={1} questionDetails={{ options: [1, 2, 3, 4] }}/> */}
      {/* <Heading questionNo={1} questionStatement="Choose the largest number from the given numbers" /> */}
      {/* <MatchTheFollowing queNo={2} questionDetails={{ pairs: [["23+48","21"],["45+16","37"],["13+24","71"],["12+9","61"]], column2: ["21", "37", "71", "61"] }} /> */}
      <Report questionDetails={questionDetails} />
    </div>
    </>
  );
}



// column2: ["21", "37", "71", "61"]
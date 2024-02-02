import React from 'react';
// import LargestNumber from '../components/Questions/LargestNumber';
// import MatchTheFollowing from '../components/Questions/MatchTheFollowing';
import Sidebar from '../components/Sidebar';
import DashBoard from '../components/Questions/DashBoard';
import Report from '../components/Questions/Report';
import { useSelector } from "react-redux";
import React from "react";

export default function Home() {
  return (
    <>
    <Sidebar qNo={5} />
    <div className='px-4 mx-auto max-w-4xl'>
      {/* <LargestNumber queNo={1} questionDetails={{ options: [1, 2, 3, 4] }}/> */}
      {/* <Heading questionNo={1} questionStatement="Choose the largest number from the given numbers" /> */}
      <MatchTheFollowing queNo={2} questionDetails={{ pairs: [["23+48","21"],["45+16","37"],["13+24","71"],["12+9","61"]], column2: ["21", "37", "71", "61"] }} />
    </div>
  );
}

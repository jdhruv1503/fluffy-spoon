import React from 'react';
// import MatchTheFollowing from '../components/Questions/MatchTheFollowing';
// import LargestNumber from '../components/Questions/LargestNumber';
import MatchTheFollowing from '../components/Questions/MatchTheFollowing';

export default function Home() {
  return (
    <div className='px-4 mx-auto max-w-4xl'>
      {/* <LargestNumber queNo={1} questionDetails={{ options: [1, 2, 3, 4] }}/> */}
      {/* <Heading questionNo={1} questionStatement="Choose the largest number from the given numbers" /> */}
      <MatchTheFollowing queNo={1} questionDetails={{ options: [1, 2, 3, 4] }} />
    </div>
  );
}

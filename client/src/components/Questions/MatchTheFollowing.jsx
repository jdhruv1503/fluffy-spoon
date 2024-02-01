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
  );
}

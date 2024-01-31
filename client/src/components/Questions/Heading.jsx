import React from 'react'

export default function Heading({questionNo,questionStatement}) {
  return (
    <div className=' flex flex-col  ' >
        <div className=' font-inter-tight text-3xl text-black text-2.125rem font-normal  inline-block mb-2 ' ><span className="bg-green-200 px-2 rounded-lg ">Question {questionNo}. </span></div>
        <div className=" font-inter-tight text-5xl text-black text-2.125rem font-normal inline-block px-1">{questionStatement}</div>
    </div>
  )
}

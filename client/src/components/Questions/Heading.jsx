import React from 'react'

export default function Heading({questionNo,questionStatement}) {
  return (
    <div>
        <div className=' font-inter-tight text-black text-2.125rem font-normal' >Question {questionNo}</div>
        <div className="text-black font-poppins text-4rem font-normal leading-4.125rem tracking-wide">{questionStatement}</div>
    </div>
  )
}

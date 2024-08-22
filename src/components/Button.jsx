import React from 'react'

export default function Button(props) {
    const{text, func} = props
  return (
      <div className='text-center'>
        <button onClick={func} className='mt-4 px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
            <p>{text}</p>
        </button>
      </div>
  )
}

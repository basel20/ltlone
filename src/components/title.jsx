import React from 'react'

const Title = ({title, text}) => {
  return (
    <div className='w-full py-8 flex flex-col justify-center items-center leading-4  '>
        <h1 className='text-4xl text-[#184e77] font-bold'>{title}</h1>
        <p className='text-md text-[#f9cf04]'>{text}</p>
        <div className='w-32 h-1 mt-3 bg-[#184e77] rounded-full'></div>
    </div>
  )
}

export default Title
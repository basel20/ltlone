import React from 'react'
import img from '../assets/1.jpg'

const Card = ({product, onClick}) => {
  return (
    <div className='h-[32rem] w-80 shadow-xl/20 rounded-3xl flex flex-col justify-between items-center p-4'>
        <div className='h-64 w-72 flex justify-center items-center'>
            <img src={product.images[0]} className='h-full w-full rounded-3xl'/>
        </div>
        <div className='w-full  flex flex-col items-start justify-between gap-3'>
            <div>
                <h1 className='text-2xl text-[#184e77]'>{product.title}</h1>
                <p className='text-lg text-[#ffce5c] text-left'>{product.category}</p>
            </div>
            <p>{product.price}</p>
            <p className='text-left text-[#6c757d]'>{product.description.split('.')[0]}.</p>
            <button onClick={onClick} className='h-12 w-full px-4 bg-[#184e77] text-[#fff] rounded-3xl hover:bg-[#ffb700]'>
                View Item
            </button>
        </div>
    </div>
  )
}

export default Card
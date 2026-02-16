import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebook} from 'react-icons/fa'

const Whatsapp = () => {
  return (
    <div className='w-16 h-56 sticky bottom-[40%] left-0 pl-2 flex flex-col justify-around'>
        <a className='text-gray-300 hover:text-green-500 transition-colors duration-300'>
            <FaWhatsapp size={45} />
        </a>
        <a className='text-gray-300 hover:text-red-500 transition-colors duration-300'>
            <FaInstagram size={'45px'} />
        </a>
        <a className='text-gray-300 hover:text-blue-500 transition-colors duration-300'>
            <FaFacebook size={'45px'} />
        </a>
    </div>
  )
}

export default Whatsapp
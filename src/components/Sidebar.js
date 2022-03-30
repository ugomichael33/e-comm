import React from 'react'
import { AiOutlineClose } from "react-icons/ai"

function Sidebar({handleToggle}) {
    

  return (
      <div>
         <div className='w-3/4 h-full bg-white fixed z-20'>
            <div>
                <AiOutlineClose onClick={handleToggle} className='mt-3 ml-4 cursor-pointer text-lg'/>
            </div>
            <ul className='ml-7 py-10 ease-linear duration-[10000ms] ' onClick={handleToggle}>
                <li className='my-2 text-lg font-bold'>Collections</li>
                <li className='text-lg font-bold'>Men</li>
                <li className='my-2 text-lg font-bold'>Women</li>
                <li className='text-lg font-bold'>About</li>
                <li className='my-2 text-lg font-bold'>Contact</li>
            </ul>   
        </div>
    </div>
  )

}

export default Sidebar
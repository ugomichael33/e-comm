import React from 'react'
import { AiOutlineClose } from "react-icons/ai"

function Sidebar({handleToggle}) {
    

  return (
      <div>
         <div className='w-3/4 h-full bg-white fixed z-10'>
            <div>
                <AiOutlineClose onClick={handleToggle} className='mt-3 ml-4 cursor-pointer'/>
            </div>
                <ul className='ml-7 py-5 ease-linear duration-[10000ms]' onClick={handleToggle}>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>   
        </div>
    </div>
  )

}

export default Sidebar
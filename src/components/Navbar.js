import React, {useState} from 'react'
import logo from '../images/logo.svg'
import { FaBars } from "react-icons/fa"
import carts from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import Sidebar from '../components/Sidebar'
import Cart from './Cart'


function Navbar({ cart, price, discount, emptyCart }) {
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    const handleToggling = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
      {open ?
      (
        <Sidebar handleToggle={handleToggle}/>
      ) : 
      null
      }
     
        <div className='sidebar flex justify-between bg-white w-full h-10 fixed z-10 pt-2 items-center'>
            <div className='burger flex'>
                <FaBars onClick={handleToggle} className='mt-[2px] ml-4'/>
                <img className='w-[100px] h-4 ml-2' src={logo} />
            </div>
            <div className='flex items-center'>
              <div className='nav-bar relative'>
                <span className='span absolute ml-4 text-white mt-[-8px] h-5 w-5 bg-orange-500 rounded-3xl text-center'>{cart.length}</span>
                <img onClick={handleToggling} className='mr-5' src={carts} />
              </div>
                <img className='w-6 mr-2 h-6' src={avatar} />
            </div>   
        </div>
        {
          isOpen ? 
          <Cart cart={cart} price={price} discount={discount} emptyCart={emptyCart} />
          :
          null
        } 
        
    </div>
  )
}

export default Navbar
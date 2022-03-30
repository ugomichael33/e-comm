import React from 'react'
import shoe from '../images/product1.jpg'
import bin from '../images/icon-delete.svg'
import CartItem from './CartItem'

function Cart({cart, price, discount, emptyCart }) {
 
  return (  
    <div className='h-60 w-60 z-30 mx-16 mt-16 bg-white fixed rounded-2xl'>
        <h4 className='mx-10 my-5 font-bold'>Cart</h4>
        <hr/>
        {
          cart.length ? 
          (
              <>
                <CartItem bin={bin} shoe={shoe} cart={cart} price={price} discount={discount} emptyCart={emptyCart}/>
              </>
          )  : (
              <>
                 <h4 className='text-center items-center my-16 capitalize'>your cart is empty</h4>
              </>
          )
        }
        
        
       
    </div> 
   
  )
}

export default Cart
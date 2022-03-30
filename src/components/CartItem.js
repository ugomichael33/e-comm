import React from 'react'


function CartItem({ bin, shoe, cart, price, discount, emptyCart }) {
    const actualPrice = price - (discount/100 * price)
    const totalPrice = actualPrice * cart.length

  return (
    <div>
       <div className='flex items-center mt-5 justify-around'>
            <img className='w-12 h-12 rounded-2xl' src={shoe} alt='' />
            <div>
                <h4 className='text-lg'>Autumn limited edition...</h4>
                <span className='text-lg'>${actualPrice} x {cart.length} <strong>${totalPrice}</strong></span>
            </div>
            <img onClick={()=>emptyCart()} src={bin} alt='' />
        </div>
        <button className='bg-orange-500 w-80 h-10 ml-4 mt-10 rounded-md text-white'>checkout</button> 
    </div>
  )
}

export default CartItem
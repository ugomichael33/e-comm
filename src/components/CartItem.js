import React from 'react'


function CartItem({ bin, shoe, cart, price, discount, emptyCart }) {
    const actualPrice = price - (discount/100 * price)
    const totalPrice = actualPrice * cart.length

  return (
    <div>
       <div className='flex items-center mt-10 justify-around'>
            <img className='w-12 h-12 rounded-2xl' src={shoe} alt='' />
            <div>
                <h4 className='text-sm'>Autumn limited edition...</h4>
                <span>${actualPrice} x {cart.length} ${totalPrice}</span>
            </div>
            <img onClick={()=>emptyCart()} src={bin} alt='' />
        </div>
        <button className='bg-orange-500 w-52 ml-4 mt-10 rounded-md text-white'>checkout</button> 
    </div>
  )
}

export default CartItem
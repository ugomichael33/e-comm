import React from 'react'
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'

function Content({ price, discount, addToCart, cart, product, deleteFromCart }) {
   const actualPrice = price - (discount/100 * price)
 
 
  return (
    <div className='mx-10'>
        <h1 className=' mt-4 uppercase font-bold text-amber-500 text-xs tracking-[1px]'>sneaker company</h1>
        <h2 className=' mt-2 capitalize font-bold text-2xl'>Fall limited edition sneakers</h2>
        <p className=' pr-5 mt-5'>These low-profile sneakers are your 
            perfect casual wear companion.
            Featuring a durable rubber outer sole, 
            they'll withstand everything the weather can offer.
        </p>
        <div className='flex justify-between mt-10 items-center'>
          <strong><p className='text-3xl'>${actualPrice}</p></strong>
          <p>{discount}%</p>
          <p className='line-through'>${price}</p>
        </div>
        <div className='flex justify-between mt-10 h-12 bg-slate-100 items-center rounded-2xl'>
          <img onClick={()=>deleteFromCart()} className='h-2 w-4 mx-5' src={minus} alt='' />
          <p>{cart.length}</p>
          <img onClick={() => addToCart(product)} className='h-3 w-4 mx-5' src={plus} alt='' />
        </div>
        <button onClick={() => addToCart(product)} className='mt-5 h-12 w-full bg-orange-500 mb-20 rounded-2xl text-white'>Add to cart</button>
    </div>
  )
}

export default Content
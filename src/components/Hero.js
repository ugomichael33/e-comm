import React, { useState } from 'react'
import { images } from './carouseldata'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'

function Hero() {
  const [ currImg, setCurrImg ] = useState(0)

  return (
    <div className=' bg-center w-full h-80 bg-orange-500'>
           <div className='h-10'></div>
           <div className='w-full h-full bg-center bg-cover flex justify-between' style={{backgroundImage: `url(${images[currImg].img})`}}>
              <div className='ml-10 mt-40 w-8 h-8 rounded-2xl bg-white' onClick={() => {currImg > 0 && setCurrImg(currImg - 1)}}><img className='ml-2 mt-2' src={previous} /></div>
              <div className='mr-10 mt-40 w-8 h-8 rounded-2xl bg-white' onClick={() => {currImg < images.length-1 && setCurrImg(currImg +1)}}><img className='ml-2 mt-2' src={next} /></div>
           </div>
    </div>
  )
}

export default Hero
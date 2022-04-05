import React, { useState } from 'react'
import { images } from './carouseldata'
import { thumbnailImages } from './carouseldata'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import './hero.css'


function Hero({ handleSelectedImage }) {
  const [ currImg, setCurrImg ] = useState(1)
  
  return (
    <div> 
      <div className=' bg-center w-full h-80 bg-orange-500 lg:hidden'>
            <div className='h-10'></div>
            <div className='w-full h-full bg-center bg-cover flex justify-between' style={{backgroundImage: `url(${images[currImg]})`}}>
                <div className='ml-10 mt-40 w-8 h-8 rounded-2xl bg-white' onClick={() => {currImg > 0 && setCurrImg(currImg - 1)}}><img className='ml-2 mt-2' src={previous} /></div>
                <div className='mr-10 mt-40 w-8 h-8 rounded-2xl bg-white' onClick={() => {currImg < images.length-1 && setCurrImg(currImg +1)}}><img className='ml-2 mt-2' src={next} /></div>
            </div>
      </div>
      <div className='large h-60 w-3/4 ml-60 mt-36'>
        <img className='rounded-2xl' src={images[0]} />
        <div className='h-[200px] w-full flex justify-between '>
          {images.map((img, index) => 
            <img onClick={()=>handleSelectedImage(index)} className='h-20 w-20 block mt-10 rounded-2xl cursor-pointer' src={img} key={index} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
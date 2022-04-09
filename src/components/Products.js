import React, { useState } from 'react'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import close from '../images/icon-close.svg'
import './products.css'

function Products({ currImg, images, toggleSelect, selectNextImage, selectPreviousImage }) {
    const [ selectedImages, setSelectedImages ] = useState(images[currImg])

    const handleSelectNext = () => {
    selectNextImage()
    setSelectedImages(images[currImg])
    }

    const handleSelectPrevious = () => {
    selectPreviousImage()
    setSelectedImages(images[currImg])
    }

  return (
    <div className='products mx-auto fixed w-full h-screen'>
        <div className=' w-full h-full bg-black z-30 fixed opacity-60'>
            
        </div>
        <div className='mt-20'>
            <div className='flex relative'>
                    <div className='z-30 '>
                        <img src={close}  onClick={()=>toggleSelect()} style={{marginLeft:'61.25rem'}} className='h-5 w-5 cursor-pointer text-xl mb-4'/> 
                    </div>
                    <div className='w-8 h-8 rounded-2xl bg-white z-40 cursor-pointer absolute mt-60' style={{marginLeft:'34.875rem'}} onClick={() => handleSelectPrevious()}><img className='ml-2 mt-2' src={previous} /></div>
                    <div className=' w-8 h-8 rounded-2xl bg-white z-40 cursor-pointer absolute mt-60' style={{marginLeft:'62.9rem'}} onClick={() => handleSelectNext()}><img className='ml-2 mt-2' src={next} /></div>
            </div>
            <div className='flex items-center justify-center flex-col m-auto'>
                <img className='h-[450px] w-[450px] z-30 rounded-2xl' src={selectedImages} />
                <div className='flex justify-between m-10' style={{width:'28.125rem'}}>
                    {images.map((img, index) => 
                        <img onClick={()=> setSelectedImages(img) } className='h-20 w-20 rounded-2xl cursor-pointer z-30' src={img} key={index} />
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
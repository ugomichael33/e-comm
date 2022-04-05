import React, { useState } from 'react'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import close from '../images/icon-close.svg'
import './products.css'

function Products({ currImg, images, thumbnailImages, toggleSelect, selectNextImage, selectPreviousImage,  }) {
    const [ selectedImages, setSelectedImages ] = useState(images[currImg])
  return (
    <div className='products'>
        <div className=' w-screen h-screen bg-black z-20 fixed opacity-60'>
            
        </div>
        <div>
            <div className='flex relative w-[500px]'>
                    <div className='z-40 '>
                        <img src={close}  onClick={()=>toggleSelect()} className='mt-14 ml-[980px] h-5 w-5 cursor-pointer text-xl fixed'/> 
                    </div>
                    <div className='ml-[535px] mt-80 w-8 h-8 rounded-2xl bg-white absolute fixed z-40 cursor-pointer' onClick={() => selectPreviousImage()}><img className='ml-2 mt-2' src={previous} /></div>
                    <div className='ml-[983px] mt-80 w-8 h-8 rounded-2xl bg-white absolute fixed z-40 cursor-pointer' onClick={() => selectNextImage()}><img className='ml-2 mt-2' src={next} /></div>
                    <img className='h-[500px] w-[450px] fixed z-30 mt-24 ml-[550px] rounded-2xl object-center ' src={ selectedImages } />
            </div>
            <div className='h-[200px] w-full flex fixed z-30 ml-[510px]'>
            {images.map((img, index) => 
                <img onClick={()=> setSelectedImages(img) } className='h-20 w-20 block mt-[620px] rounded-2xl ml-10 cursor-pointer' src={img} key={index} />
            )}
            </div>
        </div>
    </div>
  )
}

export default Products
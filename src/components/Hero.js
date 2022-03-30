import React from 'react'
import Carousel from 'react-elastic-carousel'
import product1 from '../images/product1.jpg'
import product2 from '../images/image-product-2.jpg'
import product3 from '../images/image-product-3.jpg'
import product4 from '../images/image-product-4.jpg'

function Hero() {
  return (
    <div className='pt-16'>
        <Carousel>
             <img className=''src={product1} />
             <img className=''src={product2} />
             <img className=''src={product3} />
             <img className=''src={product4} />
        </Carousel>   
    </div>
  )
}

export default Hero
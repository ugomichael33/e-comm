import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content';
import Products from './components/Products';
import { thumbnailImages } from './components/carouseldata';
import './App.css';
import { images } from './components/carouseldata';


function App() {
  const [ cart, setCart ] = useState([])
  const [ currImg, setCurrImg ] = useState(0)
  const [ selected, setSelected ] = useState(false)
  const [ products ] = useState([
    {
  price: 250,
  discount: 50
 }
  ])

  const handleAddToCart = (product) => {
    setCart([...cart, product ])
  }
  
  const handleRemoveFromCart = () => {
    const newArr = [...cart]
    let filteredCart = newArr.slice(0, -1)
    setCart(filteredCart)
  }

  const handleEmptyCart = () => {
    let filledCart = [...cart]
    filledCart.length = 0
    console.log(filledCart.length)
    setCart(filledCart)
  }

  const toggleSelect = () => {
    setSelected(prevState => !prevState)
  }

  const handleSelectedImage = (index) => {
    setCurrImg(index)
    setSelected( prevState => !prevState)
  }
  
  const selectNextImage = () => {
    if (currImg < images.length -1){
      setCurrImg(currImg +1)
    } 
  }

  const selectPreviousImage = () => {
    if (currImg > 0) {
      setCurrImg(currImg -1)
    }
  }

  return (
    <div className="App"> 
      {products.map((product, index) => (
      <Navbar key={index} cart={cart} deleteFromCart={handleRemoveFromCart} price={product.price} discount={product.discount} emptyCart={handleEmptyCart} />
      ))}  
      { selected && 
        <Products 
          currImg={currImg} 
          images={images} 
          thumbnailImages={thumbnailImages} 
          toggleSelect={toggleSelect} 
          selectNextImage={selectNextImage}
          selectPreviousImage={selectPreviousImage}
        />}
      <div className='lg:flex'> 
        <Hero  
          handleSelectedImage={handleSelectedImage}  
        /> 
        {products.map((product, index) => (
          <Content 
          key={index} 
          price={product.price} 
          discount={product.discount}  
          addToCart={handleAddToCart} 
          cart={cart} 
          product={product}
          deleteFromCart={handleRemoveFromCart}
          /> 
          ))}
      </div>    
                        
    </div>
  );
}

export default App;

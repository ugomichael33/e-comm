import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content';

import './App.css';


function App() {
  const [ cart, setCart ] = useState([])
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
  

  return (
    <div className="App">
      {products.map((product, index) => (
      <Navbar key={index} cart={cart} deleteFromCart={handleRemoveFromCart} price={product.price} discount={product.discount} emptyCart={handleEmptyCart} />
      ))}  
      <div className='lg:flex'> 
        <Hero /> 
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

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Shop from './components/Shop'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let duplicate = false;

    cart.forEach((cartItem, i) => {
      if (item.name === cartItem.name) {
        const newCart = [...cart];
        const itemToUpdate = newCart[i];
        itemToUpdate.quantity += item.quantity;
        newCart[i] = itemToUpdate;

        setCart(newCart);

        duplicate = true;
      }
    });

    if (!duplicate) {
      setCart((prevState) => {
        return [...prevState, item];
      });
    }
  };

  const removeItem = (item) => {
    console.log(item);
    const newCart = [...cart];
    newCart.forEach((cartItem, i) => {
      if (item === cartItem.name) {
        newCart.splice(i, 1);
      }
    });

    setCart(newCart);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>        
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop add={addToCart} />} />
            <Route path="/cart" element={<Cart data={cart} removeItem={removeItem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

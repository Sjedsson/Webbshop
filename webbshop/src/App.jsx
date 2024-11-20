import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Confirmation from './Pages/Confirmation';
import Favorite from './Pages/Favorite';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [likedItems, setLikedItems] = useState(() => {
    const storedLiked = localStorage.getItem('likedItems');
    return storedLiked ? JSON.parse(storedLiked) : [];
  });

  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const addToFavorite = (product) => {
    const existingItem = likedItems.find((item) => item.id === product.id);
    if (!existingItem) {
      setLikedItems([...likedItems, { ...product }]);
      setPopupMessage(`${product.name} has been added to favorites!`);
    } else {
      setPopupMessage(`${product.name} is already in favorites!`);
    }
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const removeFromFavorite = (productId) => {
    setLikedItems(likedItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="app">
        <Header cartItems={cartItems} likedItems={likedItems} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home addToCart={addToCart} addToFavorite={addToFavorite} />
              }
            />
            <Route
              path="/product/:id"
              element={<Product addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  updateCartQuantity={updateCartQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route
              path="/favorite"
              element={
                <Favorite
                  likedItems={likedItems}
                  addToCart={addToCart}
                  removeFromLiked={removeFromFavorite}
                />
              }
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </main>
        {popupMessage && (
          <div className="popup">
            <p>{popupMessage}</p>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

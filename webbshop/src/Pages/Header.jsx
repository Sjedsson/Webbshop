import React from 'react';
import { Link } from 'react-router-dom';
import HeartAnimation from '../Components/HeartAnimation';
import CartAnimation from '../Components/CartAnimation';
import '../CSS/Header.css';

const Header = ({ cartItems, likedItems = [] }) => {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const likeCount = likedItems.length; // Ensure likedItems is defined and calculate length

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>BeanStation</h1>
        </Link>
      </div>
      <div className="header-icons">
        {/* Heart Animation */}
        <Link to="/favorite"> {/* Corrected to link to Favorite.jsx */}
          <button className="icon-button">
            <div className="lottie-icon">
              <HeartAnimation />
            </div>
            <span className="badge">{likeCount}</span>
          </button>
        </Link>

        {/* Cart Animation */}
        <Link to="/cart">
          <button className="icon-button">
            <div className="lottie-icon">
              <CartAnimation />
            </div>
            <span className="badge">{cartCount}</span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

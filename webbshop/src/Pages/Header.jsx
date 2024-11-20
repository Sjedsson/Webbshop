import React from 'react';
import { Link } from 'react-router-dom';
import HeartAnimation from '../Components/HeartAnimation';
import CartAnimation from '../Components/CartAnimation';
import logo from '../assets/Pictures/logo.png';
import '../CSS/Header.css';

const Header = ({ cartItems, likedItems = [] }) => {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const likeCount = likedItems.length;

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="BeanStation Logo" className="logo-image" />
        </Link>
      </div>
      <div className="header-icons">
        <Link to="/favorite"> 
          <button className="icon-button">
            <div className="lottie-icon">
              <HeartAnimation />
            </div>
            <span className="badge">{likeCount}</span>
          </button>
        </Link>
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

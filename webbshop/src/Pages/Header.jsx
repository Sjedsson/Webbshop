import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/Icons/cart.png';
import favoriteIcon from '../assets/Icons/favorite.png';
import '../CSS/Header.css';

const Header = ({ cartItems }) => {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>BeanStation</h1>
        </Link>
      </div>
      <div className="header-icons">
        <button className="icon-button">
          <img src={favoriteIcon} alt="Favorites" className="icon" />
          <span className="badge">0</span>
        </button>
        <Link to="/cart">
          <button className="icon-button">
            <img src={cartIcon} alt="Cart" className="icon" />
            <span className="badge">{cartCount}</span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

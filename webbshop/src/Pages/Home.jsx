import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';
import colombiaImage from '../assets/Pictures/Colombia.jpg';
import ethiopiaImage from '../assets/Pictures/Ethiopia.jpg';
import brazilImage from '../assets/Pictures/Brazil.jpg';
import backgroundImage from '../assets/Pictures/2.avif';

const Home = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Colombian Coffee',
      price: 12.99,
      image: colombiaImage,
    },
    {
      id: 2,
      name: 'Ethiopian Coffee',
      price: 14.99,
      image: ethiopiaImage,
    },
    {
      id: 3,
      name: 'Brazilian Coffee',
      price: 10.99,
      image: brazilImage,
    },
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <img
          src={backgroundImage}
          alt="Coffee Beans Background"
          className="background-image"
        />
        <div className="hero-text">
          <h1>Welcome to BeanStation</h1>
          <p>
            At BeanStation, we believe every coffee tells a story. From the rich
            hills of Colombia to the vibrant culture of Brazil, our beans are
            sourced with passion and roasted to perfection. Brew your perfect
            cup today.
          </p>
        </div>
        <div className="arrow">
          <p>Our Products</p>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

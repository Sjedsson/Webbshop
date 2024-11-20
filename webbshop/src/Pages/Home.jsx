import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';
import colombiaImage from '../assets/Pictures/Colombia.jpg';
import ethiopiaImage from '../assets/Pictures/Ethiopia.jpg';
import brazilImage from '../assets/Pictures/Brazil.jpg';
import backgroundImage from '../assets/Pictures/1.jpg';
import HeartAnimation from '../Components/HeartAnimation';

const Home = ({ addToCart, addToFavorite }) => {
  const [popupMessage, setPopupMessage] = useState('');
  
  const products = [
    {
      id: 1,
      name: 'Colombian Coffee',
      price: 12.99,
      image: colombiaImage,
      color: '#4B1C21', // Coffee color for Colombian Coffee
    },
    {
      id: 2,
      name: 'Ethiopian Coffee',
      price: 14.99,
      image: ethiopiaImage,
      color: '#D54B28', // Coffee color for Ethiopian Coffee
    },
    {
      id: 3,
      name: 'Brazilian Coffee',
      price: 10.99,
      image: brazilImage,
      color: '#5F8231', // Coffee color for Brazilian Coffee
    },
  ];

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupMessage(`${product.name} added to cart!`);
    setTimeout(() => setPopupMessage(''), 3000); 
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-container">
          <img
            src={backgroundImage}
            alt="Coffee Beans Background"
            className="background-image"
          />
          <div className="hero-text">
            <h1>Welcome to BeanStation</h1>
            <p>
              At BeanStation, we believe every coffee tells a story. From the
              rich hills of Colombia to the vibrant culture of Brazil, our beans
              are sourced with passion and roasted to perfection. Brew your
              perfect cup today.
            </p>
            <button onClick={scrollToProducts} className="products-link">
              Our Products
            </button>
          </div>
        </div>
      </div>
      <div id="products" className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </Link>
            <h3>
              <Link 
                to={`/product/${product.id}`}
                style={{ color: product.color }} 
              >
                {product.name}
              </Link>
            </h3>
            <p>${product.price.toFixed(2)}</p>
            <div className="product-actions">
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="like-icon"
                onClick={() => {
                  console.log('Adding to favorite:', product);
                  addToFavorite(product);
                }}
              >
                <HeartAnimation />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {popupMessage && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Home;

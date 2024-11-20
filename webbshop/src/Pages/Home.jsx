import React from 'react';
import '../CSS/Home.css';
import colombiaImage from '../assets/Pictures/Colombia.jpg';
import ethiopiaImage from '../assets/Pictures/Ethiopia.jpg';
import brazilImage from '../assets/Pictures/Brazil.jpg';
import backgroundImage from '../assets/Pictures/1.jpg';
import HeartAnimation from '../Components/HeartAnimation';

const Home = ({ addToCart, addToFavorite }) => {
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

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
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
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <div className="product-actions">
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
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
    </div>
  );
};

export default Home;

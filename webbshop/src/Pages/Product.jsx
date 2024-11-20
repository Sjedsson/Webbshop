import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../CSS/Product.css';
import backIcon from '../assets/icons/back.png';  // Importing the back icon

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [popupMessage, setPopupMessage] = useState(''); // State for popup message
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/products.json');
      const data = await response.json();
      const foundProduct = data.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
    };

    fetchProducts();
  }, [id]);

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setPopupMessage(`${product.name} added to cart!`);
    setTimeout(() => setPopupMessage(''), 3000); 
  };

  return (
    <div className="product-details">
      <img 
        src={backIcon} 
        alt="Back" 
        className="back-icon" 
        onClick={() => navigate(-1)} 
      />
      
      <img src={product.image} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>

      <h2>Tasting Notes:</h2>
      <p>{product.tastingNotes || "Enjoy the unique flavor profile with every sip!"}</p>

      {/* Flavor Profile Graph */}
      <div className="flavor-profile">
        <h3>Flavor Profile</h3>
        <div className="flavor-bar">
          <div className="flavor-item strength" style={{ width: `${product.strength}%` }}>
            <span>Strength</span>
          </div>
          <div className="flavor-item sweetness" style={{ width: `${product.sweetness}%` }}>
            <span>Sweetness</span>
          </div>
          <div className="flavor-item acidity" style={{ width: `${product.acidity}%` }}>
            <span>Acidity</span>
          </div>
        </div>
      </div>

      <button className='product-cart' onClick={handleAddToCart}>Add to Cart</button>

      {popupMessage && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Product;

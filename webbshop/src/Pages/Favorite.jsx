import React, { useState } from 'react';
import '../CSS/Favorite.css';

const Favorite = ({ likedItems, addToCart, removeFromLiked }) => {
  const [popupMessage, setPopupMessage] = useState(''); // State for popup message

  const handleAddToCart = (item) => {
    addToCart(item);
    setPopupMessage(`${item.name} added to cart!`); // Set the popup message
    setTimeout(() => setPopupMessage(''), 3000); // Clear the popup after 3 seconds
  };

  return (
    <div className="favorite-page">
      <h1>Your Favorites</h1>
      {likedItems.length === 0 ? (
        <p>You haven't liked any products yet!</p>
      ) : (
        likedItems.map((item) => (
          <div key={item.id} className="favorite-item">
            <img
              src={item.image}
              alt={item.name}
              className="favorite-item-image"
            />
            <div className="favorite-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
            <div className="favorite-actions">
              <button
                className="favorite-add-to-cart-button"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              <button
                className="favorite-remove-button"
                onClick={() => removeFromLiked(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      {popupMessage && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Favorite;

import React from 'react';
import '../CSS/Favorite.css';

const Favorite = ({ likedItems, addToCart, removeFromLiked }) => {
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
                className="add-to-cart-button"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
              <button
                className="remove-button"
                onClick={() => removeFromLiked(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorite;

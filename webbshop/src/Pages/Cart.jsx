import React from 'react';
import '../CSS/Cart.css';

const Cart = ({ cartItems, updateCartQuantity, removeFromCart }) => {
  const handleQuantityChange = (id, value) => {
    if (value > 0) {
      updateCartQuantity(id, value);
    }
  };

  const incrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateCartQuantity(id, item.quantity + 1);
    }
  };

  const decrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateCartQuantity(id, item.quantity - 1);
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="quantity-button"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="quantity-input"
                  />
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="quantity-button"
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;

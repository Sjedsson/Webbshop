import React from 'react';
import '../CSS/Cart.css';

const Cart = ({ cartItems, updateCartQuantity, removeFromCart }) => {
  const handleQuantityChange = (id, e) => {
    const quantity = parseInt(e.target.value);
    if (!isNaN(quantity) && quantity > 0) {
      updateCartQuantity(id, quantity);
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
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e)}
            />
            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;

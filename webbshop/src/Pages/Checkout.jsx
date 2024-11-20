import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CSS/Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  const [deliveryInfo, setDeliveryInfo] = useState({ name: '', address: '', email: '' });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [discountCode, setDiscountCode] = useState('');

  const handleDeliveryChange = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/confirmation', {
      state: {
        cartItems,
        totalPrice,
        deliveryInfo,
        paymentMethod,
        discountCode,
      },
    });
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-details">
        <h2>Your Cart Details</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} className="checkout-item-image" />
              <div className="checkout-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>

      <div className="checkout-form">
        <h2>Delivery Information</h2>
        <form className="checkout-field">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={deliveryInfo.name}
            onChange={handleDeliveryChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={deliveryInfo.address}
            onChange={handleDeliveryChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={deliveryInfo.email}
            onChange={handleDeliveryChange}
            required
          />
        </form>

        <h2>Payment Information</h2>
        <select
          className="checkout-field"
          value={paymentMethod}
          onChange={handlePaymentChange}
          required
        >
          <option value="creditcard">Credit Card</option>
          <option value="swish">Swish</option>
          <option value="klarna">Klarna</option>
        </select>

        <button type="submit" onClick={handleSubmit}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;

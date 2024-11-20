import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const { cartItems, totalPrice, deliveryInfo, paymentMethod, discountCode } = location.state || { cartItems: [], totalPrice: 0 };

  return (
    <div className="confirmation">
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been successfully placed.</p>
      <p>A confirmation email has been sent to your inbox.</p>

      <div className="order-details">
        <h2>Your Order Summary</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.name} className="order-item-image" />
              <div className="order-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))
        )}

        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

        <div className="order-info">
          <h3>Delivery Information</h3>
          <p>Name: {deliveryInfo.name}</p>
          <p>Address: {deliveryInfo.address}</p>
          <p>Email: {deliveryInfo.email}</p>

          <h3>Payment Information</h3>
          <p>Payment Method: {paymentMethod}</p>

          {discountCode && <p>Discount Code Applied: {discountCode}</p>}
        </div>
      </div>
    </div>
  );
};

export default Confirmation;

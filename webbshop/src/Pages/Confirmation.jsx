import React from 'react';
import '../CSS/Confirmation.css';

const Confirmation = () => {
  return (
    <div className="confirmation">
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been successfully placed.</p>
      <p>A confirmation email has been sent to your inbox.</p>
    </div>
  );
};

export default Confirmation;

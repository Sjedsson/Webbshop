import React, { useState } from 'react';
import '../CSS/Checkout.css';

const Checkout = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {step === 1 && (
        <div>
          <h2>Delivery Details</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Address" required />
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Payment Details</h2>
          <form>
            <input type="text" placeholder="Card Number" required />
            <button type="button" onClick={handleNext}>
              Next
            </button>
            <button type="button" onClick={handleBack}>
              Back
            </button>
          </form>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Confirm Order</h2>
          <p>Review your order before confirming.</p>
          <button type="button" onClick={handleNext}>
            Confirm
          </button>
          <button type="button" onClick={handleBack}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;

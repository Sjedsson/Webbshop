import React from 'react';
import Lottie from 'lottie-react';
import CartAnimationData from '../assets/Icons/cart.json';


const CartAnimation = () => {
  return (
    <div className="cart-animation">
      <Lottie animationData={CartAnimationData} loop={true} className="cart-icon" />
    </div>
  );
};

export default CartAnimation;

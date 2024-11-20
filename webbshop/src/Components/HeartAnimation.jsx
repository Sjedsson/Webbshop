import React from 'react';
import Lottie from 'lottie-react';
import heartAnimation from '../assets/icons/heart.json';

const HeartAnimation = () => {
  return (
    <Lottie animationData={heartAnimation} loop={true} className="lottie-icon" />
  );
};

export default HeartAnimation;

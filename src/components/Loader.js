import React from 'react';
import '../styles/Loader.scss';

export const Loader = () => {
  const loaderText = [
    'Swapping time and space...',
    'Spinning violently around the y-axis...',
    "Don't think of purple hippos...",
    'Upgrading Windows, your PC will restart several times. Sit back and relax.',
    'Please wait while the little elves draw your map.',
    'Checking the gravitational constant in your locale...',
    "At least you're not on hold...",
    "We're testing your patience.",
    'Spinning the wheel of fortune...',
    'How about this weather, eh?',
    'TODO: Insert elevator music.'
  ];

  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <span>
          <img src="/images/logo.svg" alt="logo" />
        </span>
        <div className="loader"></div>
        <p className="loader-text">{loaderText[Math.floor(Math.random() * loaderText.length)]}</p>
      </div>
    </div>
  );
};

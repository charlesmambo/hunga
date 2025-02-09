import React from 'react';
import './PrimaryBtn.css';

const PrimaryBtn = ({ text, onClick, className = '' }) => {
  return (
    <button className={`primary-btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryBtn;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='back-container'>
      <button className="back-button" onClick={handleGoBack}>
      ← Back
    </button>
    </div>
    
  );
};

export default BackButton;

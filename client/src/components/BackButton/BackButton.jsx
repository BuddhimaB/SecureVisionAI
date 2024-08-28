import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className='back-container'>
      <button className="btn" onClick={handleGoBack}>
      ← Back
    </button>
    </div>
    
  );
};

export default BackButton;

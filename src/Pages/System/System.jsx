import React from 'react';
import './System.css';
import NavBar from '../../components/NavBar/NavBar';
import Bottom from '../../components/BottomDetails/Bottom';
import { useNavigate } from 'react-router-dom';

const System = () => {
  const navigate = useNavigate();

  // Functions to handle button clicks and navigate to different routes
  const handleButtonOneClick = () => {
    navigate('/setting'); 
  };

  const handleButtonTwoClick = () => {
    navigate('/logintosystem'); 
  };

  return (
    <div>
      <NavBar />
      
      {/* Container to center buttons */}
      <div className="buttonContainer">
        <button onClick={handleButtonOneClick} className="navigateButton">Create New System</button>
        <button onClick={handleButtonTwoClick} className="navigateButton">Login to existing system</button>
      </div>

      <Bottom />
    </div>
  );
};

export default System;

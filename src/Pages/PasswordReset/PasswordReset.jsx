import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Bottom from '../../components/BottomDetails/Bottom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../assets/Mainimg.jpg';
import './PasswordReset.css'
function PasswordReset() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };
    const handleInputChange1 = (e) => {
        setNewPassword(e.target.value);
      };
      const handleInputChange2 = (e) => {
        setConfirmPassword(e.target.value);
      };

    const handleSubmit =()=>{
      if (newPassword === confirmPassword) {
        alert('Password Reset Successfully')
        navigate('/login');
      } else {
        alert('Password didnot Match');
      }
    }
    
  
  return (
    <div>
        <Topbar /> 
      <div className='feedContainer'>
        <div className="feedLeft">
          <h1 className='resetTitle'>Reset Password</h1>
          
          <div className="inputField1">            
            <input 
             
            type={passwordVisible ? 'text' : 'password'}
            name="newpassword" 
            value={newPassword}
            onChange={handleInputChange1}
            placeholder='New Password' />
            
            <button 
                type="button" 
                onClick={togglePasswordVisibility}
                className="toggle-btn1"
            >
                {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="inputField1">            
            <input 
            
            type={confirmPasswordVisible ? 'text' : 'password'}
            name="confirmpassword"
            value={confirmPassword}
            onChange={handleInputChange2}
            placeholder='Confirm Password' />
            
            <button 
                type="button" 
                onClick={toggleConfirmPasswordVisibility}
                className="toggle-btn1"
            >
                {confirmPasswordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          <button className='btn1' onClick={handleSubmit}>Reset Password</button>
        </div>
        
        <div className="feedRight">
          <img className="feedRightimg" src={Main} alt="Main" />
        </div>
      </div>
      <Bottom /> 
    </div>
  )
}

export default PasswordReset
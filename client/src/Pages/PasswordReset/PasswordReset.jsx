import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Bottom from '../../components/BottomDetails/Bottom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../assets/Mainimg.jpg';
function PasswordReset() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

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
          <h1>Reset Password</h1>
          <div className="inputField">                    
            <label>New Password:</label>
            <input
              type="password"
              name="newpassword"
              value={newPassword}
              onChange={handleInputChange1}
              placeholder='New Password'
            />
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmpassword"
              value={confirmPassword}
              onChange={handleInputChange2}
              placeholder='Confirm Password'
            />         
          </div>
          <button className='btn' onClick={handleSubmit}>Reset Password</button>
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
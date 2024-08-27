import './OTP.css'
import Topbar from '../../components/Topbar/Topbar'
import Bottom from '../../components/BottomDetails/Bottom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OTP() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleOTPSubmit = () => {
    // Simulate OTP verification
    const validOTP = '123456'; // Replace with your OTP verification logic

    if (otp === validOTP) {
      navigate('/'); // Redirect on successful OTP verification
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div>
      <Topbar />
      <div className='otpContainer'>
        <div className="otpLeft">
          <h1>Enter OTP</h1>
          <h4>Please enter the OTP sent to your email.</h4>
          <div className="inputField">
            <input 
              className='otpInputField'
              type="text" 
              placeholder="Enter OTP" 
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
            />
          </div>
          <button className="otpButton" onClick={handleOTPSubmit}>Submit</button>
        </div>
      </div>
      <Bottom />
    </div>
  )
}
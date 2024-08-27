import './ForgotPassword.css';
import Topbar from '../../components/Topbar/Topbar';
import Bottom from '../../components/BottomDetails/Bottom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../assets/Mainimg.jpg';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  const validate = () => {
    const newErrors = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Valid email is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (validate()) {
      // If validation passes, navigate to the OTP page
      navigate('/otp');
    }
  };

  return (
    <div>
      <Topbar /> 
      <div className='feedContainer'>
        <div className="feedLeft">
          <h1>Forgot Password</h1>
          <div className="inputField">                    
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <button onClick={handleSubmit}>Send OTP</button>
          </div>
        </div>
        
        <div className="feedRight">
          <img className="feedRightimg" src={Main} alt="Main" />
        </div>
      </div>
      <Bottom />   
    </div>
  );
}

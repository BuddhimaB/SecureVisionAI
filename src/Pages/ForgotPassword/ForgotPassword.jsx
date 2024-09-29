import './ForgotPassword.css';
import Topbar from '../../components/Topbar/Topbar';
import Bottom from '../../components/BottomDetails/Bottom';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../assets/Mainimg.jpg';
import emailjs from "@emailjs/browser"


export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState({});
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        setLoading(true);
    
        emailjs
          .send(
            "service_d5tzs8m", //Service ID
            "template_lgnbwmv", //template id
            {
              from_email: email,
            },
            "ESyXSp3n_yMa3Pt5G" //user ID
          )
          .then(
            () => {
              setLoading(false);
              alert("Reset link send to your mail.");
    
              setEmail('');
            },
            (error) => {
              setLoading(false);
              console.error(error);
    
              alert("Ahh, something went wrong. Please try again.");
            }
          );
      };
    }
  

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
              placeholder='Enter Your Email Address'
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <button className='btn' onClick={handleSubmit}>Send Reset Link</button>
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

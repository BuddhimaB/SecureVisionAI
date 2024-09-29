import './Login.css';
import Topbar from '../../components/Topbar/Topbar';
import Bottom from '../../components/BottomDetails/Bottom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../assets/Mainimg.jpg';
import VideoS from '../../assets/startVideo.mp4';
import { login } from '../../api/client';  // Import the login function

export default function Login() {
  const [email, setEmail] = useState(''); // Changed to email for API compatibility
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For displaying login errors
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(''); // Clear any previous errors

    try {
      // Call the login API with the entered email and password
      const response = await login(email, password);

      // If login is successful, navigate to the home page
      console.log('Login successful:', response);
      localStorage.setItem('token', response.token);  // Store token in localStorage
      navigate('/home');  // Redirect to home page
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid credentials, please try again.');  // Set error message
    }
  };

  return (
    <div>
      <Topbar />
      <video autoPlay loop muted className='video'>
        <source src={VideoS} type='video/mp4' />
      </video>

      <div className='feedContainer'>
        <div className="feedLeft">
          <h1>Welcome Back!</h1>
          <h4>Please enter your details</h4>
          <div className="inputField">
            <input 
              className='inputField'
              type="text" 
              placeholder="Email"  // Changed from Username to Email
              value={email}
              onChange={(e) => setEmail(e.target.value)}  // Set email value
            />
            
            <input 
              className='inputField' 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}  // Set password value
            />
          </div>

          {error && <p className="error">{error}</p>}  {/* Display error message if login fails */}

          <button className="loginButton" onClick={handleLogin}>Login</button>
          <span className='fogotPass'> 
            <a href='/forgot-password'>Forgot Password?</a> 
          </span>
        </div>
        
        {/* <div className="feedRight">
          <img className="feedRightimg" src={Main} alt="" />
        </div> */}
      </div>
      <Bottom />
    </div>
  );
}

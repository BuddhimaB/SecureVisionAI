import './Login.css';
import Topbar from '../../components/Topbar/Topbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../assets/Mainimg.jpg'; // Example image
import VideoS from '../../assets/startVideo.mp4'; // Example video
import { login } from '../../api/client'; // Import the login API function

export default function Login() {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for handling errors
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle login
  const handleLogin = async () => {
    setError('');
    console.log('Attempting to log in with:', { email, password }); // Log the email and password
  
    try {
      const response = await login(email, password);
  
      console.log('Login response from backend:', response); // Log response from backend
  
      // Check for response.data and token inside the data object
      if (response && response.data && response.data.token) {
        localStorage.setItem('token', response.data.token); // Store token in localStorage
        
        navigate('/home'); // Redirect to home page
      } else {
        setError('Invalid credentials, please try again.'); // Handle invalid credentials
      }
    } catch (error) {
      console.error('Login failed:', error); // Log any error
      setError('Login failed. Please check your credentials and try again.');
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
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            />

            <input
              className='inputField'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
            />
          </div>

          {/* Display error message if login fails */}
          {error && <p className="error">{error}</p>}

          <button className="loginButton" onClick={handleLogin}>Login</button>
          <span className='fogotPass'>
            <a href='/forgot-password'>Forgot Password?</a>
          </span>
        </div>

       
        </div>
      </div>
    
  );
}

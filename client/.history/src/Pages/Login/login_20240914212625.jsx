import './Login.css';
import Topbar from '../../components/Topbar/Topbar';
import Bottom from '../../components/BottomDetails/Bottom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../assets/Mainimg.jpg';
import VideoS from '../../assets/startVideo.mp4';
import { login } from '../../api/client';  // Import the login function

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For displaying login errors
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(''); // Clear any previous errors

    try {
      // Call the login API with the entered email and password
      const response = await login(email, password);

      // Check if the response contains a token, indicating a successful login
      if (response && response.token) {
        console.log('Login successful:', response);
        localStorage.setItem('token', response.token);  // Store token in localStorage
        navigate('/home');  // Redirect to home page
      } else {
        // If the response doesn't contain the token, treat it as a failed login
        setError('Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
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
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input 
              className='inputField' 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}  {/* Display error message if login fails */}

          <button className="loginButton" onClick={handleLogin}>Login</button>
          <span className='fogotPass'> 
            <a href='/forgot-password'>Forgot Password?</a> 
          </span>
        </div>
      {/*</div>
      <Bottom />
    </div>}
  );
}

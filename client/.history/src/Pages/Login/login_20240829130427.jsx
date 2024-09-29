import './Login.css'
import Topbar from '../../components/Topbar/Topbar'
import Bottom from '../../components/BottomDetails/Bottom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../assets/Mainimg.jpg';
import Vide


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Temporary login details
    const tempUsername = 'admin';
    const tempPassword = 'password';

    if (username === tempUsername && password === tempPassword) {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <Topbar /> 
      <video autoPlay loop muted className='video'>

      <div className='feedContainer'>
        <div className="feedLeft">
          <h1>Welcome Back!</h1>
          <h4> Please enter your details</h4>
          <div className="inputField">
          <input 
          className='inputField'
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}/>
          
          <input className='inputField' 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>



          </div>
          <button className="loginButton" onClick={handleLogin}>Login</button>
          <span className='fogotPass'> <a href='/forgot-password'>Forgot Password?</a> </span>
        </div>
        
        <div className="feedRight">
          <img className="feedRightimg" src={Main} alt="" />
          
        </div>
        </div>
        <Bottom />   
    </div>
  )
}

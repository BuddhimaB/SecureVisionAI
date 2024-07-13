import './Register.css'
import Topbar from '../../components/Topbar/Topbar'
import Bottom from '../../components/BottomDetails/Bottom'
import { useState } from 'react';

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
  return (
    <div className='RegisterContainer'>
        <Topbar />
       <div className="RegisterWrapper">
       <div className="RegisterLeft">
            <h1>Register</h1>
            <h4> Please enter your details</h4>
            <div className="inputField">
            <input 
            className='inputField'
            type="text" 
            placeholder="Username" />
            


            <input className='inputField' 
            type="password" 
            placeholder="Password" />
            <button 
                type="button" 
                onClick={togglePasswordVisibility}
                className="toggle-btn"
            >
                {passwordVisible ? 'Hide' : 'Show'}
            </button>
            </div>


            <div className="passwordWrapper">
                <input 
                type={passwordVisible ? 'text' : 'password'} 
                placeholder="Password" 
                className="inputField" 
                required
                minLength={5}/>

                <button 
                type="button" 
                onClick={togglePasswordVisibility}
                className="toggle-btn"
            >
                {passwordVisible ? 'Hide' : 'Show'}
            </button>
                </div>
            
            <button className="RegisterButton">Register</button>
            <span className='fogotPass'>Forgot Password?</span>
        </div>
        
        <div className="RegisterRight">
            <h4>IMAGE</h4>
            
        </div>
       </div>
        <Bottom className='bottomPart'/>
    </div>
    
  )
}

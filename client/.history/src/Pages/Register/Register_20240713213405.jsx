import './Register.css'
import Topbar from '../../components/Topbar/Topbar'
import Bottom from '../../components/BottomDetails/Bottom'
import { useState } from 'react';

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const toggleConfirmPasswordVisibility = () => {
        setPasswordVisible(!confirmpasswordVisible);
    };
  return (
    <div className='RegisterContainer'>
        <Topbar />
       <div className="RegisterWrapper">
       <div className="RegisterLeft">
            <h1>Hi! Welcome</h1>
            <h4> Please register in below</h4>
            <div className="inputField">

            <input 
            className='inputField'
            type="text" 
            placeholder=" Full Name" />
            <input 
            className='inputField'
            type="text" 
            placeholder="Email or Phone number" />
            

            <div className="passwordContainer">
                <input 
                className='inputField' 
                type={passwordVisible ? 'text' : 'password'} 
                placeholder="Password" />
                <button 
                    type="button" 
                    onClick={togglePasswordVisibility}
                    className="toggle-btn"
                >
                    {passwordVisible ? 'Hide' : 'Show'}
                </button>
            </div>

            <div className="passwordContainer">
                <input 
                className='inputField' 
                type={confirmpasswordVisible ? 'text' : 'password'} 
                placeholder="Confirm Password" />
                <button 
                    type="button" 
                    onClick={toggleConfirmPasswordVisibility}
                    className="toggle-btn"
                >
                    {confirmpasswordVisible ? 'Hide' : 'Show'}
                </button>
            </div>
            </div>

            
            <button className="RegisterButton">Register</button>
            <span className='fogotPass'>Have an account? Login</span>
        </div>
        
        <div className="RegisterRight">
            <h4>IMAGE</h4>
            
        </div>
       </div>
        <Bottom className='bottomPart'/>
    </div>
  )
}

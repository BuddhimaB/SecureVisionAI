import './Register.css';
import Topbar from '../../components/Topbar/Topbar';
import Bottom from '../../components/BottomDetails/Bottom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };
    const gotoLogin = () => {
        navigate('/login');
    };

    return (
        <div className='RegisterContainer'>
            <Topbar />
           <div className="RegisterWrapper">
           <div className="RegisterLeft">
                <h1>Hi! Welcome</h1>
                <h4> Please register below</h4>
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
                    type={confirmPasswordVisible ? 'text' : 'password'} 
                    placeholder="Confirm Password" />
                    <button 
                        type="button" 
                        onClick={toggleConfirmPasswordVisibility}
                        className="toggle-btn"
                    >
                        {confirmPasswordVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
                </div>

                
                <button className="RegisterButton">Register</button>
                <span
                onClick={gotoLogin}
                 className='fogotPass'>
                    Have an account? Login
                </span>
            </div>
            
            <div className="RegisterRight">
                <img src={} alt="" />
                
            </div>
           </div>
            <Bottom className='bottomPart'/>
        </div>
    );
}

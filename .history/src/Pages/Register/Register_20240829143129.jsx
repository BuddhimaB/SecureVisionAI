import './Register.css';
import Topbar from '../../components/Topbar/Topbar';
import Bottom from '../../components/BottomDetails/Bottom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../assets/Mainimg.jpg';

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [fullName, setFullName] = useState(''); // State for full name
    const [email, setEmail] = useState('');       // State for email
    const [password, setPassword] = useState(''); // State for password
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
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

    // Function to handle form submission
    const handleRegister = () => {
        // Log the input values to the console
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className='RegisterContainer'>
            <Topbar />
           <div className="RegisterWrapper">
           <div className="RegisterLeft">
                <h1>Hi! Welcome</h1>
                <h4> Please register below</h4>
                <div className="inputField">
                    <input req
                        className='inputField'
                        type="text" 
                        placeholder="Full Name"
                        value={fullName} // Bind input value to state
                        onChange={(e) => setFullName(e.target.value)} // Update state on change
                    />
                    <input required
                        className='inputField'
                        type="text" 
                        placeholder="Email"
                        value={email} // Bind input value to state
                        onChange={(e) => setEmail(e.target.value)} // Update state on change
                    />
                    <div className="passwordContainer">
                        <input 
                        required
                            className='inputField' 
                            type={passwordVisible ? 'text' : 'password'} 
                            placeholder="Password"
                            value={password} // Bind input value to state
                            onChange={(e) => setPassword(e.target.value)} // Update state on change
                        />
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
                        required
                            className='inputField' 
                            type={confirmPasswordVisible ? 'text' : 'password'} 
                            placeholder="Confirm Password"
                            value={confirmPassword} // Bind input value to state
                            onChange={(e) => setConfirmPassword(e.target.value)} // Update state on change
                        />
                        <button 
                            type="button" 
                            onClick={toggleConfirmPasswordVisibility}
                            className="toggle-btn"
                        >
                            {confirmPasswordVisible ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>

                <button 
                    className="RegisterButton"
                    onClick={handleRegister} // Attach handleRegister to onClick
                >
                    Register
                </button>
                <span
                    onClick={gotoLogin}
                    className='fogotPass'>
                    Have an account? Login
                </span>
            </div>
            
            <div className="RegisterRight">
                <img 
                    className="RegisterRightimg"
                    src={Main} alt="Secure Vision AI" 
                />
            </div>
           </div>
            <Bottom className='bottomPart'/>
        </div>
    );
}

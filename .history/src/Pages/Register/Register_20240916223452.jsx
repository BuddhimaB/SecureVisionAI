import './Register.css';
import Topbar from '../../components/Topbar/Topbar';
import Bottom from '../../components/BottomDetails/Bottom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../assets/Mainimg.jpg';
import { register } from '../../api/client'; // Ensure to import your register API function

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [firstName, setfitName] = useState(''); // State for full name
    const [lasttName, setfirstName] = useState(''); // State for full name
    const [email, setEmail] = useState('');       // State for email
    const [password, setPassword] = useState(''); // State for password
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
    const [error, setError] = useState(''); // State for storing error messages
    const navigate = useNavigate(); // Hook for navigation

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const gotoLogin = () => {
        navigate('/');
    };

    // Function to handle form submission
    const handleRegister = async () => {
        // Reset error state
        setError('');

        // Validate input fields
        if (!fullName || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        // Email validation using regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            // Call the updated API function to register with fullName
            const response = await register(fullName, email, password);

            if (response) {
                console.log('Registration Successful:', response);
                // Navigate to the login page after successful registration
                navigate('/');
            }
        } catch (error) {
            setError('Registration failed. Please try again.');
            console.error('Registration Error:', error);
        }
    };

    return (
        <div className='RegisterContainer'>
            <Topbar />
            <div className="RegisterWrapper">
                <div className="RegisterLeft">
                    <h1>Hi! Welcome</h1>
                    <h4>Please register below</h4>
                    <div className="inputField">
                        <input 
                            className='inputField'
                            type="text" 
                            placeholder="First Name"
                            value={fullName} // Bind input value to state
                            onChange={(e) => setFullName(e.target.value)} // Update state on change
                        />
                        <input 
                            className='inputField'
                            type="text" 
                            placeholder="Last Name"
                            value={fullName} // Bind input value to state
                            onChange={(e) => setFullName(e.target.value)} // Update state on change
                        />
                        <input 
                            className='inputField'
                            type="email" 
                            placeholder="Email"
                            value={email} // Bind input value to state
                            onChange={(e) => setEmail(e.target.value)} // Update state on change
                        />
                        <div className="passwordContainer">
                            <input 
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

                    {error && <p className="error">{error}</p>} {/* Display error messages */}

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

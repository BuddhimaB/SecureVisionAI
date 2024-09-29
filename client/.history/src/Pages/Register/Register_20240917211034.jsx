import './Register.css';
import Topbar from '../../components/Topbar/Topbar';
import Bottom from '../../components/BottomDetails/Bottom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api'; // Import the register function
import Main from '../../assets/Mainimg.jpg';

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
        setError('');

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

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
            const response = await register(firstName, lastName, email, password);
            console.log('Registration Successful:', response);
            navigate('/'); // Redirect after success
        } catch (error) {
            setError('Registration failed. Please try again.');
            console.error('Registration Error:', error);
        }
    };

    return (
        <div className='RegisterContainer'>
            <Topbar />
            <div className="RegisterWrapper">
                {/* Registration form */}
                {/* Your JSX form structure here */}
            </div>
        </div>
    );
}

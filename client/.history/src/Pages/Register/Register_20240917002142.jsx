import './Register.css';
import Topbar from '../../components/Topbar/Topbar';
import Bottom from '../../components/BottomDetails/Bottom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../reducers/userSlice';  // Use the registerUser function to connect to the backend
import Main from '../../assets/Mainimg.jpg';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .matches(/[a-z]/, 'Password must have at least one lowercase letter')
        /*.matches(/[A-Z]/, 'Password must have at least one uppercase letter')
        .matches(/\d/, 'Password must have at least one number')
        .min(8, 'Password must be at least 8 characters long'),*/
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (values, { setSubmitting, setErrors }) => {
        try {
            // Dispatch the registerUser action to call the backend API
            const resultAction = await dispatch(registerUser(values));
            console.log('Dispatch result:', resultAction); // Debugging: Check the dispatch result

            if (registerUser.fulfilled.match(resultAction)) {
                // Only navigate if registration is successful
                console.log('Registration successful');
                navigate('/');
            } else {
                console.log('Registration failed:', resultAction.payload);
                setErrors({ server: resultAction.payload || 'Registration failed. Please try again.' });
            }
        } catch (error) {
            setErrors({ server: 'Registration failed. Please try again.' });
            console.error('Error during registration:', error); // Debugging: Log the error
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className='RegisterContainer'>
            <Topbar />
            <div className="RegisterWrapper">
                <div className="RegisterLeft">
                    <h1>Hi! Welcome</h1>
                    <h4>Please register below</h4>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleRegister}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            setErrors,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <input
                                    className='inputField'
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                />
                                {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}

                                <input
                                    className='inputField'
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                                {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}

                                <input
                                    className='inputField'
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {touched.email && errors.email && <p>{errors.email}</p>}

                                <div className="passwordContainer">
                                    <input
                                        className='inputField'
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {touched.password && errors.password && <p>{errors.password}</p>}
                                </div>

                                <div className="passwordContainer">
                                    <input
                                        className='inputField'
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                                </div>

                                {/* Server error handling */}
                                {errors.server && <p className="error">{errors.server}</p>}

                                <button
                                    type="submit"
                                    className="RegisterButton"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Registering...' : 'Register'}
                                </button>
                            </form>
                        )}
                    </Formik>

                    <span
                        onClick={() => navigate('/')}
                        className='forgotPass'>
                        Have an account? Login
                    </span>
                </div>

                <div className="RegisterRight">
                    <img
                        className="RegisterRightimg"
                        src={Main}
                        alt="Secure Vision AI"
                    />
                </div>
            </div>
            <Bottom className='bottomPart' />
        </div>
    );
}

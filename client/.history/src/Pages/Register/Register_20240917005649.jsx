import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../reducers/userSlice';  // Connect this to your backend

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label('First Name'),
    lastName: Yup.string().required().label('Last Name'),
    email: Yup.string().required().email().label('Email').min(3).max(36),
    password: Yup.string()
        .required()
        .min(8)
        .max(15)
        .label('Password')
        .matches(/\d+/, 'Password should contain at least one number')
        .matches(/[a-z]+/, 'Password should contain at least one lowercase character')
        .matches(/[A-Z]+/, 'Password should contain at least one uppercase character')
        .matches(/[!@#$%^&*()-+]+/, 'Password should contain at least one special character'),
    confirmPassword: Yup.string()
        .required()
        .label('Confirm Password')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const userState = useSelector(state => state.user);

    const handleRegister = async (values) => {
        setLoading(true);
        const user = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        };
        try {
            // Dispatch action to register user and send data to backend
            await dispatch(registerUser(user));
            setLoading(false);
            navigate('/dashboard');  // Redirect on success
        } catch (error) {
            setLoading(false);
            console.error('Registration error:', error);
        }
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                handleRegister(values);
            }}
        >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                    />
                    {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                    />
                    {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {touched.email && errors.email && <p>{errors.email}</p>}

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {touched.password && errors.password && <p>{errors.password}</p>}

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                    />
                    {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                    <button type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Register'}
                    </button>
                </form>
            )}
        </Formik>
    );
}

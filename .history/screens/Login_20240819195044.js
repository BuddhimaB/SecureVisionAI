import React, { useState } from 'react';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    InputField,
    Button
} from './../component/style';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Email:', email);
        console.log('Password:', password);
        // You can add further logic like validation and API calls here
    };

    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo />
                <PageTitle>Login</PageTitle>
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <InputField
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit">Login</Button>
                </form>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Login;

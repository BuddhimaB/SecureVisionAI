import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from '../Pages/Register/Register'; // Adjust path as necessary
import { MemoryRouter } from 'react-router-dom'; // Mock router
import { createMemoryHistory } from 'history'; // To mock navigation
import { Router } from 'react-router-dom';

describe('Register Component', () => {

  test('renders Register page elements', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
    expect(screen.getByText('Have an account? Login')).toBeInTheDocument();
  });

  test('displays error message when fields are empty', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    expect(screen.getByText('All fields are required.')).toBeInTheDocument();
  });

  test('displays error message when email is invalid', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const registerButton = screen.getByRole('button', { name: /register/i });

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
    
    fireEvent.click(registerButton);

    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
  });

  test('displays error message when passwords do not match', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const registerButton = screen.getByRole('button', { name: /register/i });

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password456' } });
    
    fireEvent.click(registerButton);

    expect(screen.getByText('Passwords do not match.')).toBeInTheDocument();
  });

  test('navigates to login page on successful registration', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Register />
      </Router>
    );

    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const registerButton = screen.getByRole('button', { name: /register/i });

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
    
    fireEvent.click(registerButton);

    expect(history.location.pathname).toBe('/login');
  });

  test('toggles password visibility', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const passwordInput = screen.getByPlaceholderText('Password');
    const toggleButton = within(passwordInput.closest('.passwordContainer')).getByText('Show');
    
    // Check initial password type
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Click to toggle visibility
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    // Click again to hide
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});


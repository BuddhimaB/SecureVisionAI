import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Profile from '../Pages/Profile/Profile'; // Adjust the import path if necessary
import '@testing-library/jest-dom/extend-expect';

describe('Profile Component', () => {
  const mockUser = {
    name: 'John Doe',
    role: 'Administrator',
    phone: '+1-123-456-7890',
    email: 'johndoe@example.com',
    image: 'https://www.imagella.com/cdn/shop/products/fec5e9f79ee323f367b0fec5d7177663_89776d30-f406-46cf-8a1b-c58b59aa9d54.jpg?v=1708376164',
  };


test('renders the profile component', () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
    
    const profileHeadings = screen.getAllByText('Profile');
    // Ensure there's more than one element with 'Profile'
    expect(profileHeadings.length).toBeGreaterThan(0);
  
    // You can add additional checks to confirm if one of these elements is the actual profile header
    expect(profileHeadings[0].tagName).toBe('H2'); // Adjust this check based on which element you expect
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.role)).toBeInTheDocument();
    expect(screen.getByText(mockUser.phone)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
  });
  

  test('displays edit mode when Edit button is clicked', () => {
    render(
      <MemoryRouter> {/* Wrap with MemoryRouter */}
        <Profile />
      </MemoryRouter>
    );
    
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);
    
    // Check if the input fields appear in edit mode
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Role')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  test('allows editing user details', () => {
    render(
      <MemoryRouter> {/* Wrap with MemoryRouter */}
        <Profile />
      </MemoryRouter>
    );
    
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);
    
    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    
    // Save the changes
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    // Check if the updated value is displayed
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the custom matchers
import NewUser from '../Pages/NewUser/NewUser';

// Mock the components that are imported
jest.mock('../components/NavBar/NavBar', () => () => <div>NavBar</div>);
jest.mock('../components/BackButton/BackButton', () => () => <div>BackButton</div>);
jest.mock('../components/BottomDetails/Bottom', () => () => <div>Bottom</div>);

// Mock the fetch API
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

describe('NewUser Page', () => {
  
  // Test for rendering the form elements
  test('renders all form fields and buttons correctly', () => {
    render(<NewUser />);

    // Check if all the form elements are present
    expect(screen.getByRole('heading', { name: /Add User/i })).toBeInTheDocument(); // Adjust to target the h2 heading
    expect(screen.getByLabelText('Username:')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address:')).toBeInTheDocument();
    expect(screen.getByText('Select Cameras:')).toBeInTheDocument();

    // Check for all camera checkboxes
    expect(screen.getByLabelText('Camera 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Camera 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Camera 3')).toBeInTheDocument();

    // Check for the 'Add User' button
    expect(screen.getByRole('button', { name: /Add User/i })).toBeInTheDocument(); // Adjust to target the button
  });

  // Test form submission behavior with correct values
  test('submits the form with valid data', async () => {
    render(<NewUser />);
    
    // Fill out form fields
    fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'johnDoe' } });
    fireEvent.change(screen.getByLabelText('First Name:'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name:'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email Address:'), { target: { value: 'john@example.com' } });

    // Select cameras
    fireEvent.click(screen.getByLabelText('Camera 1'));
    fireEvent.click(screen.getByLabelText('Camera 2'));

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Add User/i })); // Adjust to target the button

    // Ensure the success message is shown
    await waitFor(() => {
      expect(screen.getByText('Successfully added new user!')).toBeInTheDocument();
    });

    // Check that fetch was called with the correct data
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData: {
          username: 'johnDoe',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          selectedCameras: ['Camera 1', 'Camera 2'],
        }
      }),
    });
  });

  // Test for validation messages
  test('shows validation errors if required fields are missing', async () => {
    render(<NewUser />);
    
    // Click submit without filling any fields
    fireEvent.click(screen.getByRole('button', { name: /Add User/i })); // Adjust to target the button

    // Ensure validation errors appear
    await waitFor(() => {
      expect(screen.getByText('Username is required')).toBeInTheDocument();
      expect(screen.getByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('Last name is required')).toBeInTheDocument();
      expect(screen.getByText('Valid email is required')).toBeInTheDocument();
    });
  });

  // Test the checkbox behavior for selecting cameras
  test('checkboxes for cameras are working correctly', () => {
    render(<NewUser />);
    
    const camera1Checkbox = screen.getByLabelText('Camera 1');
    const camera2Checkbox = screen.getByLabelText('Camera 2');

    // Simulate selecting cameras
    fireEvent.click(camera1Checkbox);
    expect(camera1Checkbox).toBeChecked();

    fireEvent.click(camera2Checkbox);
    expect(camera2Checkbox).toBeChecked();

    // Deselect a camera
    fireEvent.click(camera1Checkbox);
    expect(camera1Checkbox).not.toBeChecked();
  });

  // Test if the success message disappears after 5 seconds
  test('success message disappears after 5 seconds', async () => {
    jest.useFakeTimers(); // Use fake timers
    render(<NewUser />);
  
    // Fill out form fields
    fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'johnDoe' } });
    fireEvent.change(screen.getByLabelText('First Name:'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name:'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email Address:'), { target: { value: 'john@example.com' } });
    
    // Select some cameras
    fireEvent.click(screen.getByLabelText('Camera 1'));
    fireEvent.click(screen.getByLabelText('Camera 2'));
  
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Add User/i }));
  
    // Expect success message to be displayed
    await waitFor(() => {
      expect(screen.getByText('Successfully added new user!')).toBeInTheDocument();
    });
  
    // Fast forward 5 seconds using act
    act(() => {
      jest.advanceTimersByTime(5000);
    });
  
    // The success message should no longer be in the document
    expect(screen.queryByText('Successfully added new user!')).not.toBeInTheDocument();
    
    jest.useRealTimers(); // Clean up by restoring real timers
  });
  
});


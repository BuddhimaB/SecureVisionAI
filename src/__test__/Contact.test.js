import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../Pages/ContactUs/Contact';
import '@testing-library/jest-dom/extend-expect';
import emailjs from "@emailjs/browser";

// Mock emailjs.send to resolve the promise
jest.mock("@emailjs/browser", () => ({
  send: jest.fn(() => Promise.resolve()), 
}));


// Setup the alert mock globally
beforeAll(() => {
  window.alert = jest.fn();
});

// Clear all mocks after each test to ensure no test contamination
afterEach(() => {
  jest.clearAllMocks();
});

describe('Contact Page', () => {

  test('renders all elements correctly', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    // Check if "Contact Us" heading is rendered
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();

    // Check if all form fields and labels are rendered
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });



  test('handles form submission error', async () => {
    // Mock emailjs.send to reject the promise
    emailjs.send.mockImplementationOnce(() => Promise.reject('Error occurred'));

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'johndoe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message:/i), { target: { value: 'This is a test message' } });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Wait for the alert to be called on failure
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Ahh, something went wrong. Please try again.");
    });
  });
});

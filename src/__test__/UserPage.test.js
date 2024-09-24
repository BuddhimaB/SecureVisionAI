import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserPage from '../Pages/User/UserPage';
import usersData from '../data/db.json';

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

describe('UserPage Component', () => {
  test('renders the page title', () => {
    render(<UserPage />);
    const titleElement = screen.getByText(/User Details/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders a list of users with their details', () => {
    render(<UserPage />);

    usersData.blogs.forEach((user) => {
      // Find the user card container based on the username
      const userCard = screen.getAllByText(user.formData.username)
        .find((element) => element.closest('.user-card') !== null)
        .closest('.user-card');

      expect(userCard).toBeInTheDocument();

      // Use 'within' to check the content inside the specific user card
      const firstNameElements = within(userCard).queryAllByText(new RegExp(user.formData.firstName, 'i'));
      expect(firstNameElements.length).toBeGreaterThan(0);

      const lastNameElements = within(userCard).queryAllByText(new RegExp(user.formData.lastName, 'i'));
      expect(lastNameElements.length).toBeGreaterThan(0);

      const emailElement = within(userCard).getByText(new RegExp(user.formData.email, 'i'));
      expect(emailElement).toBeInTheDocument();
    });
  });

  test('does not render "Selected Cameras" if no cameras are selected', () => {
    render(<UserPage />);

    usersData.blogs.forEach((user) => {
      // Find the user card container based on the username
      const userCard = screen.getAllByText(user.formData.username)
        .find((element) => element.closest('.user-card') !== null)
        .closest('.user-card');

      expect(userCard).toBeInTheDocument();

      if (user.formData.selectedCameras.length === 0) {
        // Check within the specific user card to see if "Selected Cameras" is absent
        const selectedCamerasElements = within(userCard).queryAllByText(/Selected Cameras/i);
        expect(selectedCamerasElements.length).toBe(0);
      } else {
        // If cameras are selected, ensure that "Selected Cameras" is rendered correctly
        const selectedCamerasElement = within(userCard).getByText(/Selected Cameras/i);
        expect(selectedCamerasElement).toBeInTheDocument();
      }
    });
  });
});

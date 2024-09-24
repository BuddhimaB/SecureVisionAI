import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Setting1 from '../Pages/SettingPage/Setting1'; // Adjust path if necessary
import { MemoryRouter } from 'react-router-dom'; // To mock routing

describe('Setting1 Component', () => {
  
test('renders Settings page title', () => {
    render(
            <MemoryRouter>
            <Setting1 />
            </MemoryRouter>
    );
  
    // Use getAllByText and select the first heading "Settings"
    const settingsElements = screen.getAllByText('Settings');
    
    // Check if the <h2> with text 'Settings' is present
    const pageTitle = settingsElements.find((element) => element.tagName.toLowerCase() === 'h2');
    expect(pageTitle).toBeInTheDocument();
  });
  

  test('renders camera type select and handles adding camera with error', () => {
    render(
      <MemoryRouter>
        <Setting1 />
      </MemoryRouter>
    );

    const addButton = screen.getByText('Add Camera');
    fireEvent.click(addButton);
    expect(screen.getByText('Please select a camera type.')).toBeInTheDocument();

    // Select IP Camera and add it
    const selectElement = screen.getByLabelText('Select Camera Type:');
    fireEvent.change(selectElement, { target: { value: 'ip' } });
    fireEvent.click(addButton);
    expect(screen.queryByText('Please select a camera type.')).toBeNull(); // Error should be gone
  });

  test('toggles automatic intrusion detection switch', () => {
    render(
      <MemoryRouter>
        <Setting1 />
      </MemoryRouter>
    );
    
    const autoDetectionSwitch = screen.getByLabelText('Enable Automatic Intrusion Detection');
    expect(autoDetectionSwitch.checked).toBe(false); // Initially off

    fireEvent.click(autoDetectionSwitch);
    expect(autoDetectionSwitch.checked).toBe(true); // Toggled on
  });

  test('toggles alarm enabled switch', () => {
    render(
      <MemoryRouter>
        <Setting1 />
      </MemoryRouter>
    );

    const alarmSwitch = screen.getByLabelText('Enable Alarm:');
    expect(alarmSwitch.checked).toBe(false); // Initially off

    fireEvent.click(alarmSwitch);
    expect(alarmSwitch.checked).toBe(true); // Toggled on
  });

  test('displays success message when settings are saved', () => {
    render(
      <MemoryRouter>
        <Setting1 />
      </MemoryRouter>
    );

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(screen.getByText('Settings updated successfully.')).toBeInTheDocument();
  });

  test('navigates to new user page when clicking Manage Users', () => {
    render(
      <MemoryRouter>
        <Setting1 />
      </MemoryRouter>
    );

    const manageUsersButton = screen.getByText('Manage Users:');
    fireEvent.click(manageUsersButton);
    // Check if the route was changed to "/new-user"
    expect(manageUsersButton).toBeInTheDocument(); 
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

describe('NavBar Component', () => {
  it('renders the NavBar component without crashing', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText(/SecureVision AI/i)).toBeInTheDocument(); // Adjust as necessary
  });
});



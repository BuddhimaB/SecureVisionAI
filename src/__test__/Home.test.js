import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import '@testing-library/jest-dom/extend-expect';

// Mocking the NavBar and Bottom components
jest.mock('../components/NavBar/NavBar', () => () => <div>NavBar Mock</div>);
jest.mock('../components/BottomDetails/Bottom', () => () => <div>Bottom Mock</div>);

describe('Home Page', () => {
  test('renders all elements correctly', () => {
    render(
      <Router location="/" navigator={createMemoryHistory()}>
        <Home />
      </Router>
    );

    // Check that the active cameras section renders
    expect(screen.getByText(/Active Cameras/)).toBeInTheDocument();

    // Check that camera videos are rendered using the data-testid approach
    const videos = screen.getAllByTestId('camera-video');
    expect(videos.length).toBeGreaterThan(0); // At least one video element

    // Check "See All" button is rendered
    expect(screen.getByText(/See All/)).toBeInTheDocument();

    // Check that auto detection and last intrusion sections render
    expect(screen.getByText(/Auto Detection/)).toBeInTheDocument();
    expect(screen.getByText(/Last Intrusion/)).toBeInTheDocument();

    // Check the users section renders
    expect(screen.getByText(/Users/)).toBeInTheDocument();

    // Check that user images are rendered
    const userImages = screen.getAllByRole('img');
    expect(userImages.length).toBeGreaterThan(0); // At least one image

    // Check the "View More" buttons are rendered
    expect(screen.getByText(/View More/)).toBeInTheDocument();
    expect(screen.getByText(/User Details/)).toBeInTheDocument();
  });

  test('navigates to intrusion page when "View More" is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );

    // Simulate the button click for "View More"
    fireEvent.click(screen.getByText('View More'));

    // Check if the route was changed to "/intrusion"
    expect(history.location.pathname).toBe('/intrusion');
  });

  test('navigates to user page when "User Details" is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );

    // Simulate the button click for "User Details"
    fireEvent.click(screen.getByText('User Details'));

    // Check if the route was changed to "/user"
    expect(history.location.pathname).toBe('/user');
  });

  test('toggles "See All" button correctly', () => {
    render(
      <Router location="/" navigator={createMemoryHistory()}>
        <Home />
      </Router>
    );

    const seeAllButton = screen.getByText(/See All/);

    // Initial click to expand
    fireEvent.click(seeAllButton);
    expect(seeAllButton.textContent).toBe('Show Less');

    // Click again to collapse
    fireEvent.click(seeAllButton);
    expect(seeAllButton.textContent).toBe('See All');
  });

  test('renders the correct number of camera videos when "See All" is clicked', () => {
    render(
      <Router location="/" navigator={createMemoryHistory()}>
        <Home />
      </Router>
    );

    const seeAllButton = screen.getByText(/See All/);

    // Initially, 4 videos should be visible
    let videos = screen.getAllByTestId('camera-video');
    expect(videos.length).toBe(4);

    // Click the "See All" button to expand
    fireEvent.click(seeAllButton);

    // Now, all camera videos should be visible
    videos = screen.getAllByTestId('camera-video');
    expect(videos.length).toBeGreaterThan(4);
  });
});

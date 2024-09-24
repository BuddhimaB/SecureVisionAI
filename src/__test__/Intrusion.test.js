import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Intrusion from '../Pages/Intrusions/Intrusion';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter


describe('Intrusion Page', () => {
  
  // Test if all elements are rendered correctly
  it('should render recent intrusion details', () => {
    // Wrap Intrusion component with MemoryRouter
    render(
      <MemoryRouter>
        <Intrusion />
      </MemoryRouter>
    );

    // Check for Recent Intrusion heading
    const recentIntrusionHeading = screen.getByText(/Recent Intrusion/i);
    expect(recentIntrusionHeading).toBeInTheDocument();

    // Check for date and time of recent intrusion
    const dateTime = screen.getByText(/Date and Time: 2024-08-15 14:45:00/i);
    expect(dateTime).toBeInTheDocument();

    // Check for intrusion images
    const images = screen.getAllByAltText(/Intrusion/i);
    expect(images).toHaveLength(3); // Expecting 3 images

    // Check if the video is rendered
    const video = screen.getByTestId('recent-intrusion-video');
    expect(video).toBeInTheDocument();
  });

  // Test if past intrusions list is rendered
  it('should render the list of past intrusions', () => {
    // Wrap Intrusion component with MemoryRouter
    render(
      <MemoryRouter>
        <Intrusion />
      </MemoryRouter>
    );

    // Check for Intrusions in the Last 30 Days heading
    const pastIntrusionsHeading = screen.getByText(/Intrusions in the Last 30 Days/i);
    expect(pastIntrusionsHeading).toBeInTheDocument();

    // Select only past intrusion entries, which are rendered within <span> tags
    const pastIntrusionDates = screen.getAllByText(/Date and Time: /i).filter((element) => element.tagName === 'SPAN');
    expect(pastIntrusionDates).toHaveLength(2); // We have 2 past intrusions in the mock data
  });   
  
    // Test if clicking "View" button displays intrusion details in a modal
    it('should show intrusion details when "View" is clicked', () => {
        render(
        <MemoryRouter>
            <Intrusion />
        </MemoryRouter>
        );
    
        // Find the first "View" button and click it
        const viewButton = screen.getAllByText(/View/i)[0];
        fireEvent.click(viewButton);
    
        // Check if the modal appears with the correct details
        const modalTitle = screen.getByText(/Intrusion Details - 2024-08-10 09:30:00/i);
        expect(modalTitle).toBeInTheDocument();
    
        // Check that the modal contains images and video
        const modal = screen.getByTestId('intrusion-modal');
        const modalImages = within(modal).getAllByAltText(/Intrusion/i);
        expect(modalImages).toHaveLength(3); // Expecting 3 images in the modal
    
        const modalVideo = screen.getByTestId('modal-intrusion-video');
        expect(modalVideo).toBeInTheDocument();
    });
  

  // Test closing the modal
  it('should close the modal when the close button is clicked', () => {
    // Wrap Intrusion component with MemoryRouter
    render(
      <MemoryRouter>
        <Intrusion />
      </MemoryRouter>
    );

    // Open the modal first
    const viewButton = screen.getAllByText(/View/i)[0];
    fireEvent.click(viewButton);

    // Now close the modal
    const closeButton = screen.getByText(/×/i);
    fireEvent.click(closeButton);

    // Check that the modal is no longer in the document
    const modalTitle = screen.queryByText(/Intrusion Details - 2024-08-10 09:30:00/i);
    expect(modalTitle).not.toBeInTheDocument();
  });
});

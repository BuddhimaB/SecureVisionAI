import React, { useState } from 'react';
import './Intrusion.css';
import NavBar from '../../components/NavBar/NavBar';
import Bottom from '../../components/BottomDetails/Bottom';
import BackButton from '../../components/BackButton/BackButton';

// Sample data for recent intrusion and past intrusions
const recentIntrusion = {
  dateTime: '2024-08-15 14:45:00',
  images: [
    'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png', // Replace with actual image URLs
    'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png',
    'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png',
  ],
  video: 'https://media.istockphoto.com/id/1258113642/video/cctv-ai-facial-recognition-camera-zoom-in-recognizes-person-elevated-security-camera.mp4?s=mp4-640x640-is&k=20&c=TlH8GGU6X2BO4IOuazMIcJO1KvGDrDhWjDSDova2LEk=', // Replace with actual video URL
};

const pastIntrusions = [
  {
    id: 1,
    dateTime: '2024-08-10 09:30:00',
    images: [
      'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png', // Replace with actual image URLs
      'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png',
      'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png',
    ],
    video: 'https://media.istockphoto.com/id/1258113642/video/cctv-ai-facial-recognition-camera-zoom-in-recognizes-person-elevated-security-camera.mp4?s=mp4-640x640-is&k=20&c=TlH8GGU6X2BO4IOuazMIcJO1KvGDrDhWjDSDova2LEk=', 
  },
  {
    id: 2,
    dateTime: '2024-08-05 22:15:00',
    images: [
      'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png', // Replace with actual image URLs
      'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png',
      'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png',
    ],
    video: 'https://media.istockphoto.com/id/1258113642/video/cctv-ai-facial-recognition-camera-zoom-in-recognizes-person-elevated-security-camera.mp4?s=mp4-640x640-is&k=20&c=TlH8GGU6X2BO4IOuazMIcJO1KvGDrDhWjDSDova2LEk=', 
  },
  // Add more past intrusions as needed
];

const Intrusion = () => {
  const [selectedIntrusion, setSelectedIntrusion] = useState(null);

  const handleViewClick = (intrusion) => {
    setSelectedIntrusion(intrusion);
  };

  return (
    <>
    <NavBar/>
    <BackButton/>
    <div className="intrusion-container">
      
      <div className="recent-intrusion">
        <h2>Recent Intrusion</h2>
        <p>Date and Time: {recentIntrusion.dateTime}</p>
        <div className="intrusion-images">
          {recentIntrusion.images.map((src, index) => (
            <img key={index} src={src} alt={`Intrusion ${index + 1}`} />
          ))}
        </div>
        <div className="intrusion-video">
          <video src={recentIntrusion.video} controls />
        </div>
      </div>

      
      <div className="past-intrusions">
        <h2>Intrusions in the Last 30 Days</h2>
        <ul>
          {pastIntrusions.map((intrusion) => (
            <li key={intrusion.id} className="intrusion-item">
              <span>Date and Time: {intrusion.dateTime}</span>
              <button onClick={() => handleViewClick(intrusion)}>View</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for viewing selected intrusion details */}
      {selectedIntrusion && (
        <div className="intrusion-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedIntrusion(null)}>
              &times;
            </span>
            <h3>Intrusion Details - {selectedIntrusion.dateTime}</h3>
            <div className="intrusion-images">
              {selectedIntrusion.images.map((src, index) => (
                <img key={index} src={src} alt={`Intrusion ${index + 1}`} />
              ))}
            </div>
            <div className="intrusion-video">
              <video src={selectedIntrusion.video} controls />
            </div>
          </div>
        </div>
      )}
    </div>
    <Bottom/>
    </>
  );
};

export default Intrusion;




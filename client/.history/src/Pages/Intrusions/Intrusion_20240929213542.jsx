import React, { useState, useEffect } from 'react';
import './Intrusion.css';
import NavBar from '../../components/NavBar/NavBar';
import Bottom from '../../components/BottomDetails/Bottom';
import BackButton from '../../components/BackButton/BackButton';
import api from '../../api'; // Updated API import
import local_Intrutuons from '../../api/local_Intrutuons';

const Intrusion = () => {
  const [recentIntrusion, setRecentIntrusion] = useState(null);
  const [pastIntrusions, setPastIntrusions] = useState([]);
  const [selectedIntrusion, setSelectedIntrusion] = useState(null);

  // Fetch recent and past intrusions from the API
  const fetchIntrusionData = async () => {
    try {
      // Fetch all intrusions
      const response = await local_Intrutuons.getIntrusions();
      if (response?.status === 200) {
        const intrusions = response?.data?.data;

        // Set recent intrusion as the last intrusion in the array
        setRecentIntrusion(intrusions[intrusions.length - 1]);

        // Set past intrusions (all except the most recent one)
        setPastIntrusions(intrusions.slice(0, intrusions.length - 1));
      }
    } catch (error) {
      console.error('Error fetching intrusion data', error);
    }
  };

  useEffect(() => {
    fetchIntrusionData();
  }, []);

  // Handle clicking on past intrusion
  const handleViewClick = (intrusion) => {
    setSelectedIntrusion(intrusion);
  };

  return (
    <>
      <NavBar />
      <BackButton />
      <div className="intrusion-container">
        
        {/* Left Section: Past Intrusion Videos */}
        <div className="past-intrusions">
          <h2>Intrusions in the Last 30 Days</h2>
          <ul>
            {pastIntrusions.length > 0 ? (
              pastIntrusions.map((intrusion) => (
                <li key={intrusion.id} className="intrusion-item">
                  <span>Date and Time: {intrusion.dateTime}</span>
                  <button onClick={() => handleViewClick(intrusion)}>View</button>
                </li>
              ))
            ) : (
              <p>No past intrusions found</p>
            )}
          </ul>
        </div>

        {/* Right Section: Recent Intrusion */}
        <div className="recent-intrusion">
          <h2>Recent Intrusion</h2>
          {recentIntrusion ? (
            <>
              <p>Date and Time: {recentIntrusion.dateTime}</p>
              <div className="intrusion-images">
                <img
                  src={recentIntrusion.images && .getIntrusionImages(recentIntrusion.id, recentIntrusion.images[0])}
                  alt="Latest Intrusion"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="intrusion-video">
                <video src={api.local_intrusions.openIntrusionVideo(recentIntrusion.id)} controls width="100%" />
              </div>
            </>
          ) : (
            <p>No recent intrusion found</p>
          )}
        </div>
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
              {selectedIntrusion.images.map((image, index) => (
                <img key={index} src={api.local_intrusions.getIntrusionImages(selectedIntrusion.id, image)} alt={`Intrusion ${index + 1}`} />
              ))}
            </div>
            <div className="intrusion-video">
              <video src={api.local_intrusions.openIntrusionVideo(selectedIntrusion.id)} controls />
            </div>
          </div>
        </div>
      )}

      <Bottom />
    </>
  );
};

export default Intrusion;

// WebCameraForm.js
import React, { useState } from 'react';
import { Button, CircularProgress, TextField } from "@mui/material";
import api from "../../api/camera"; // Import the camera API module

const WebCameraForm = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [cameraId, setCameraId] = useState(''); // State for camera ID
  const [name, setName] = useState(''); // State for camera name
  const [error, setError] = useState(''); // State for error messages

  // Function to handle adding a new web camera
  const addWebCamera = async () => {
    // Basic validation
    if (!cameraId || !name) {
      setError('Both Camera ID and Name are required.');
      return;
    }

    setLoading(true);
    setError(''); // Clear any previous errors

    const cameraData = {
      systemId: "YourSystemID", // Replace with your actual systemId
      name: name,
      type: "WEB_CAMERA",
      status: "STOP",
    };

    try {
      // Retrieve token dynamically from localStorage or your auth context
      const authToken = localStorage.getItem('authToken'); // Ensure this token is stored during login

      // Directly call the backend API using the camera.js methods
      const response = await api.addCamera(cameraData, authToken);

      if (response) {
        alert("Camera added successfully!");
      } else {
        setError("Failed to add the camera. Please try again.");
      }
    } catch (error) {
      console.error("Error adding camera:", error);
      setError("An error occurred while adding the camera. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault(); // Prevent the default form submission
      addWebCamera(); // Call the function to add the camera
    }}>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if any */}
      <TextField
        variant="standard"
        label="Camera ID"
        value={cameraId}
        onChange={(e) => setCameraId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        variant="standard"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
        style={{ marginTop: 20 }}
      >
        {loading ? <CircularProgress size={24} /> : "Add Camera"}
      </Button>
    </form>
  );
};

export default WebCameraForm;

import React, { useState } from 'react';
import { Button, CircularProgress, TextField } from "@mui/material";
import api from "../../api"; // Import your API module

const WebCameraForm = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [cameraId, setCameraId] = useState(''); // State for camera ID
  const [name, setName] = useState(''); // State for name
  const [error, setError] = useState(''); // State for error messages

  // Function to handle the addition of a web camera
  const addWebCamera = async () => {
    // Basic validation
    if (!cameraId || !name) {
      setError('Both Camera ID and Name are required.');
      return;
    }

    setLoading(true);
    const camera = {
      systemId: "YourSystemID", // Replace with your actual systemId
      name: name,
      type: "WEB_CAMERA",
      status: "STOP",
    };

    try {
      // Call the backend API to add the camera
      const response = await api.camera.addCamera(camera, "YourAuthToken"); // Replace with your actual token
      if (response?.data?.status === 201) {
        // Camera added successfully
        const cameraRes = response?.data?.data?.camera;

        // Add camera to local storage or handle it as per your requirement
        const localResponse = await api.local_camera.addCamera({
          id: cameraRes?.id,
          name: camera.name,
          type: "WEB_CAMERA",
          source: cameraId,
        });

        if (localResponse?.status === 200) {
          // Display success message
          alert("Camera added successfully!");
        }
      }
    } catch (error) {
      console.error("Error adding camera:", error);
      alert("An error occurred while adding the camera. Please try again.");
    }
    setLoading(false);
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

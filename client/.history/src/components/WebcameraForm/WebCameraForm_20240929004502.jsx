// WebCameraForm.js

import { Button, CircularProgress, TextField } from "@mui/material";
import api from "../../api/camera"; // Import the camera API module
import React, { useEffect, useRef, useState } from 'react';
import flaskCameraApi from "../../api/flaskCameraApi";

const WebCameraForm = () => {
  const videoRef = useRef(null); // Reference for video element
  const [loading, setLoading] = useState(false); // Loading state
  const [cameraId, setCameraId] = useState(''); // State for camera ID
  const [name, setName] = useState(''); // State for camera name
  const [error, setError] = useState(''); // State for error messages
  const [isStreaming, setIsStreaming] = useState(false); // Streaming state
  const [authToken,setAuthToken] =useState(localStorage.getItem('token'));

      
  const[systemId,setSystemId] = useState("1c2b187e-6ec2-4b6f-912b-04d6cbfea2b8");



  const getcamera = async () => {
    if (!systemId || !token) {
      setError('Both Camera ID and token are required.');
      return;
    }
    const cameraData ={
      systemId:systemId,
      token:token
    }
    try{
      const getcameradataresponse = await api.getCameras(cameraData, authToken);
    }
  }
  // Function to handle adding a new web camera
  const addCamera = async () => {
    // Basic validation
    if (!cameraId || !name) {
      setError('Both Camera ID and Name are required.');
      return;
    }

    setLoading(true);
    setError(''); // Clear any previous errors

    const cameraData = {
      systemId: systemId, // Example system ID
      name: name,
      type: "WEB_CAMERA",
      status: "STOP",
    };

    try {
      // Retrieve token dynamically from localStorage or your auth context 
    
      // Directly call the backend API using the camera.js methods
      const response = await api.addCamera(cameraData, authToken);
    
      if (response && (response.status === 200 || response.status === 201)) {
        const id = response.data.camera.id;
        localStorage.setItem('cameraId', id); // Store the camera ID in localStorage
        console.log('Camera added:', response);
        localStorage.setItem('cameraId', response.data.camera.id);
    
        // Prepare the local data object
        const cameraDataForLocal = {
          id: response.data.camera.id,
          name: name, // Use 'name' from the state variable
          type: "WEB_CAMERA",
          source: cameraId, // Assuming cameraId is available in the current scope
        };
        console.log("cameraId is ",cameraId);
    
        // Now attempt to add the camera to the local backend
        try {
          const localresponse = await flaskCameraApi.locallyaddCamera(cameraDataForLocal);
          
    
          if (localresponse && (localresponse?.status === 200 || localresponse.status === 201 )) {
            console.log('Local camera added successfully:', localresponse);
          } else {
            setError("Failed to add the camera locally. Please try again.");
            console.error("Failed to add the camera locally. Response:", localresponse);
          }
          
        } catch (localError) {
          console.error("Error adding camera locally:", localError);
          setError("An error occurred while adding the camera locally. Please try again.");
        }
    
        // Check if the entered cameraId is '0' and start the webcam (if needed)
        if (cameraId === '') {
          console.log("Camera ID is 0, starting webcam...");
          startWebcam();
        }
    
      } else {
        setError("Failed to add the camera. Please try again.");
        console.error("Failed to add the camera. Response:", response);
      }
    } catch (error) {
      console.error("Error adding camera:", error);
      setError("An error occurred while adding the camera. Please try again.");
    } finally {
      setLoading(false);
    }
  }; // Make sure this bracket closes the addCamera function
  
  // Function to start the webcam
  const startWebcam = async () => {
    try {
      // Request access to the user's webcam
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Set the video stream to the video element
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (error) {
      console.error("Error accessing webcam: ", error);
      setIsStreaming(false);
    }
  };

  // Cleanup function to stop the webcam stream when the component unmounts
  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault(); // Prevent the default form submission
        addCamera(); // Call the function to add the camera
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

      {/* Display the video element if the webcam is streaming */}
      {isStreaming && (
        <div style={{ marginTop: '20px' }}>
          <h3>Webcam Feed</h3>
          <video ref={videoRef} width="640" height="480" autoPlay />
        </div>
      )}
    </div>
  );
};

export default WebCameraForm;

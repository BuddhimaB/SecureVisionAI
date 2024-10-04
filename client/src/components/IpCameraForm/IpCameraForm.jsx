import React, { useState } from "react";
import { Button, CircularProgress, TextField, FormControl, FormLabel, Stack } from "@mui/material";
import camera from "../../api/camera";
import flaskCameraApi from "../../api/flaskCameraApi";

const IPCameraForm = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state
  const [name, setName] = useState(''); // State for camera name
  const [link, setLink] = useState(''); // State for camera link
  const [systemId, setSystemId] = useState(localStorage.getItem('systemId')); // Example system ID
  const [authToken, setAuthToken] = useState(localStorage.getItem('token')); // Token from local storage

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation to ensure both fields are filled
    if (!name || !link) {
      setError("Both name and link are required.");
      return;
    }

    setLoading(true);
    const cameraData = {
      systemId: systemId,
      name: name,
      type: "IP_CAMERA",
      status: "STOP",
    };

    try {
      const response = await camera.addCamera(cameraData, authToken);
      if (response && (response.status === 200 || response.status === 201)) {
        const cameraId = response.data.camera.id;

        const cameraDataForLocal = {
          id: cameraId,
          name: name,
          type: "IP_CAMERA",
          source: link,
        };

        // Send camera data to local flask API
         const localresponse = await flaskCameraApi.locallyaddCamera(cameraDataForLocal);
        if (localresponse) {
          setError("Camera added successfully.");
        }
      }
    } catch (error) {
      setError("An error occurred while adding the camera.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2}>
          <FormLabel>Select IP Camera</FormLabel>

          <TextField
            variant="standard"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            variant="standard"
            label="IP Camera Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            fullWidth
            margin="normal"
          />

          {/* Adding spacing without HeightBox */}
          <div style={{ height: 20 }}></div>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            style={{ marginTop: 20 }}
          >
            {loading ? <CircularProgress size={24} /> : "Add IP Camera"}
          </Button>

          {error && <div style={{ color: 'red' }}>{error}</div>}
        </Stack>
      </form>
    </div>
  );
};

export default IPCameraForm;

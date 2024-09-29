import React, { useState } from 'react';
import { Button, CircularProgress, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import api from "../../api"; // Import your API module

// Validation schema using Yup
const webCamValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  cameraId: Yup.string().required("Camera ID is required"),
});

const WebCameraForm = () => {
  const [loading, setLoading] = useState(false); // Loading state

  // Function to handle the addition of a web camera
  const addWebCamera = async (values) => {
    setLoading(true);
    const camera = {
      systemId: "YourSystemID", // Replace with your actual systemId or pass as a prop
      name: values.name,
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
          source: values.cameraId,
        });

        if (localResponse?.status === 200) {
          // Display success message or update state as needed
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
    <Formik
      initialValues={{
        cameraId: "",
        name: "",
      }}
      validationSchema={webCamValidationSchema}
      onSubmit={(values) => {
        addWebCamera(values); // Call the addWebCamera function on form submission
      }}
    >
      {(formikProps) => {
        const { errors, handleSubmit, handleChange, touched } = formikProps;
        return (
          <form onSubmit={handleSubmit}>
            <TextField
              variant="standard"
              label="Camera ID"
              name="cameraId"
              onChange={handleChange}
              error={touched.cameraId && Boolean(errors.cameraId)}
              helperText={touched.cameraId && errors.cameraId}
              fullWidth
              margin="normal"
            />
            <TextField
              variant="standard"
              label="Name"
              name="name"
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
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
      }}
    </Formik>
  );
};

export default WebCameraForm;

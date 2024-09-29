// camera.js
import { axiosClient } from "./client";
import React, { useEffect, useState } from 'react';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Retrieve the token from localStorage when the component mounts
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    
    if (token) {
      setToken(token);
      console.log(`Token retrieved: ${token} `, token);
    } else {
      console.log('No token found');
    }
  }, []);}
  

export default {
  async function addWebCamera(values) {
    setLoading(true);
    const camera = {
      systemId: userState?.CCTV_System?.id,
      name: values?.name,
      type: "WEB_CAMERA",
      status: "STOP",
    };

    try {
      const response = await api.camera.addCamera(camera, userState?.token);
      if (response?.data?.status === 201) {
        // Camera adding success
        const cameraRes = response?.data?.data?.camera;
        const localResponse = await api.local_camera.addCamera({
          id: cameraRes?.id,
          name: camera.name,
          type: "WEB_CAMERA",
          source: values.cameraId,
        });
        if (localResponse?.status === 200) {
          dispatch(
            addCamera({
              id: cameraRes?.id,
              name: camera.name,
              type: "WEB_CAMERA",
              source: values.cameraId,
            })
          );
        }
      }
    } catch (error) {
      // Error occured
      // Show snack bar
    }
    setLoading(false);
  },

  async function addIpCamera(values) {
    setLoading(true);
    const camera = {
      systemId: userState?.CCTV_System?.id,
      name: values?.name,
      type: "IP_CAMERA",
      status: "STOP",
    };
    try {
      const response = await api.camera.addCamera(camera, userState?.token);
      if (response?.data?.status === 201) {
        const cameraRes = response?.data?.data?.camera;
        const localResponse = await api.local_camera.addCamera({
          id: cameraRes?.id,
          name: camera.name,
          type: "IP_CAMERA",
          source: values.link,
        });
        if (localResponse?.status === 200) {
          dispatch(
            addCamera({
              id: cameraRes?.id,
              name: camera.name,
              type: "IP_CAMERA",
              source: values.link,
            })
          );
        }
      }
    } catch (error) {
      // Error occured
      // Show snack bar
    }
    setLoading(false);
  },

  async getCameras(systemId, token) {
    try {
      const response = await axiosClient.get(`camera/${systemId}`, {
        headers: { Authorization: `Bearer ${token}` }, // Include the token with Bearer
      });
      return response.data; // Return the response data directly
    } catch (error) {
      console.error("Error getting cameras:", error);
      throw error; // You can throw the error or handle it as needed
    }
  },

  async deleteCamera(cameraId, token) {
    try {
      const response = await axiosClient.delete(`camera/${cameraId}`, {
        headers: { Authorization: `Bearer ${token}` }, // Include the token with Bearer
      });
      return response.data; // Return the response data directly
    } catch (error) {
      console.error("Error deleting camera:", error);
      throw error; // You can throw the error or handle it as needed
    }
  },

  async changeCameraMonitoringStatus(data, token) {
    try {
      const response = await axiosClient.put("camera/update", data, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token with Bearer
        },
      });
      return response.data; // Return the response data directly
    } catch (error) {
      console.error("Error changing camera monitoring status:", error);
      throw error; // You can throw the error or handle it as needed
    }
  },
};

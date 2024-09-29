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
  async addCamera(data, token) {
    
      const axiosResponse = await axiosClient.post("camera/add", data, {
        headers: { Authorization: token },
        
      }
      try {
        const response = await axiosResponse;
    
        if (response?.status === 200 || response?.status === 201) {
          return response;
        }
        return new Error("Error");
      } catch (e) {
        return new Error("Error");
      }
      
    );
    
  },
  async addCamera(data, token) {
    try {
      const response = await axiosClient.post("camera/add", data, {
        headers: { Authorization: `Bearer ${token}` }, // Include the token with Bearer
      });
      return response.data; // Return the response data directly
    } catch (error) {
      console.error("Error adding camera:", error);
      throw error; // You can throw the error or handle it as needed
    }
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

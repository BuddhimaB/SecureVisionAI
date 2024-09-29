// client.js
import axios from 'axios';

// Create an axios instance with default configurations
export const axiosClient = axios.create({
  baseURL: 'https://your-backend-api.com/api', // Replace with your backend's base URL
  timeout: 10000, // Request timeout in milliseconds (optional)
  headers: {
    'Content-Type': 'application/json', // Set default content type
  },
});

// Resolver function to handle responses and errors
export const resolver = async (promise) => {
  try {
    const response = await promise;
    return response;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

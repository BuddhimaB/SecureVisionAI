import axios from 'axios';

export const register = async (firstName, lastName, email, password) => {
    try {
        const response = await axios.post('http://localhost:4001/api/user/register', {
            firstName,
            lastName,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response.data; // Handle backend error
    }
};


// Login function to send credentials to backend
export const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:4001/api/user/login', {
      email,
      password,
    });

    console.log('Backend response:', response.data);

    return response.data; // Return the response data from the backend
  } catch (error) {
    // Return the error response data from the backend
    throw error.response.data || 'Login failed';
  }
};

// client.js

// Create an axios instance with default configurations
export const axiosClient = axios.create({
  baseURL: 'http://localhost:4001/api', // Replace with your backend's base URL
  timeout: 10000, // Request timeout in milliseconds (optional)
  headers: {
    'Content-Type': 'application/json', // Set default content type
  },
});

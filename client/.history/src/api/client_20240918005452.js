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
    const response = await axios.post('http://localhost:5000/api/user/login', {
      email,
      password,
    });

    return response.data; // Return the response data from the backend
  } catch (error) {
    // Return the error response data from the backend
    throw error.response.data || 'Login failed';
  }
};

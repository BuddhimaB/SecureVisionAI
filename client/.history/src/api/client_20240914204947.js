import axios from "axios";
import {LOCAL_API_HOST, } from "../../src/constants";

export const register = async (fullName, email, password) => {
    try {
        const response = await axios.post(`${LOCAL_API_HOST}register`, {
            fullName,   // Include the full name in the request body
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;  // Re-throw the error for proper handling
    }
};

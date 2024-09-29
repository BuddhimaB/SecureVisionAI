import axios from "axios";
import {LOCAL_API_HOST, } from "../../src/constants";

export const register = async (email, password) => {
    try {
        const response = await axios.post(`${LOCAL_API_HOST}register`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
import { axiosClient, localaxiosClient } from "./client";
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
    

export default{
    async locallyaddCamera(data) {
        try {
          const localresponse = await localaxiosClient.post("/add/camera", data);
          // console.log('///////////////////////////////////////Local response:', data);
          if (localresponse?.status === 200 || localresponse?.status ===201) {
            return localresponse.data; // Return the response data directly
          }
    
          throw new Error("Error");
        } catch (error) {
          console.error("Error adding camera:", error);
          throw error; // You can throw the error or handle it as needed
        }
      },

      
}
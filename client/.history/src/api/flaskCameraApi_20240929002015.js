import { axiosClient, localaxiosClient } from "./client";
import React, { useEffect, useState } from 'react';

export default{
    async locallyaddCamera(data) {
        try {
          const localresponse = await localaxiosClient.post("/add/camera", data);
          console.log('///////////////////////////////////////Local response:', data);
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
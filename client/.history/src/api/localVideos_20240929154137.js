import { localAxiosClient, localResolver } from "../client";

export default {
  async getRecordVides(date) {
    try{
        const response = await localAxiosClient.get(`get/record_ids/${date}`);
        return response;
    }
    catch(error){
        console.error("Error getting record videos:", error);
        throw error;
    }
  },
  
  async openRecordVideo(id) {
    try{
        const response = await localAxiosClient.get(`get/record/${id}`);
        return response;
    }
    catch(error){
        console.error("Error OPENNING record video:", error);
        throw error;
    }
  },
};

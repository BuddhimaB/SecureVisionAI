import { localaxiosClient, localResolver } from "./client";

export default {
  async getRecordVides(date) {
    try{
        const response = await localaxiosClient.get(`get/record_ids/${date}`);
        return response;
    }
    catch(error){
        console.error("Error getting record videos:", error);
        throw error;
    }
  },
  
  async openRecordVideo(id) {
    try{
        const response = await localaxiosClient.get(`get/record/${id}`);
        return response;
    }
    catch(error){
        console.error("Error OPENNING record video:", error);
        throw error;
    }
  },

  async getVideosByDate(date) {
    try {
      const response = await api.local_video.getRecordVides(date);
      console.log("Video response: ", response);
      if (response?.status === 200) {
        return response?.data?.data;
      }
    } catch (error) {
      setRecordVideos([]);
    }
  }
};

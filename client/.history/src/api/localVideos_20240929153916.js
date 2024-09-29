import { localAxiosClient, localResolver } from "../client";

export default {
  async getRecordVides(date) {
    return localResolver(await localAxiosClient.get(`get/record_ids/${date}`));
  },
  async openRecordVideo(id) {
    try{
        const response = await localAxiosClient.get(`get/record/${id}`);
        return
    }
    catch(error){
        console.error("Error getting record video:", error);
        throw error;
    }
  },
};

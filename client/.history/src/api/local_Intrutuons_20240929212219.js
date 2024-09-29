import { localaxiosClient, localResolver } from "./client";
export default{
async getIntrusions() {
    try {
        const response = await localaxiosClient.get(`get/intrusions`);
        return response;
    } catch (error) {
        console.error("Error getting intrusions:", error);
        throw error;
    }
},

//method getIntrusionImages
async getIntrusionImages(intrusionId, image) {
    try {
        const response = await localaxiosClient.get(`get/image/${intrusionId}/${image}`);
        return response;
    } catch (error) {
        console.error("Error getting intrusion images:", error);
        throw error;
    }
},

//method to openIntrusionVideo
async openIntrusionVideo(intrusionId) {
    try {
        const response = await localAxiosClient.get(`get/intrusion_video/${intrusionId}`);
        return response;
    } catch (error) {
        console.error("Error OPENNING intrusion video:", error);
        throw error;
    }
};
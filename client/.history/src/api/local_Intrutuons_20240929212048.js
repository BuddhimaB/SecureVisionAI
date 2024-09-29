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

};
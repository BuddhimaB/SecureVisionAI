import { localAxiosClient, localResolver } from "../client";

export default {
  async getRecordVides(date) {
    return localResolver(await localAxiosClient.get(`get/record_ids/${date}`));
  },
  async openRecordVideo(id) {
    (await localAxiosClient.get(`get/record/${id}`));
  },
};

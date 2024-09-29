// camera.js
import { axiosClient, resolver } from './client';

export default {
  // Add a new camera
  async addCamera(data, token) {
    return resolver(
      await axiosClient.post('/camera/add', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
    );
  },

  // Get all cameras for a specific system ID
  async getCameras(systemId, token) {
    return resolver(
      await axiosClient.get(`/camera/${systemId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    );
  },

  // Delete a camera by ID
  async deleteCamera(cameraId, token) {
    return resolver(
      await axiosClient.delete(`/camera/${cameraId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    );
  },

  // Update the camera monitoring status
  async changeCameraMonitoringStatus(data, token) {
    return resolver(
      await axiosClient.put('/camera/update', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );
  },
};

import React from 'react';
import './We.css';

const WebCameraForm = () => {
  return (
    <form id="webCameraForm">
      <div className="form-group">
        <label htmlFor="webCameraName">Name</label>
        <input type="text" className="form-control" id="webCameraName" placeholder="Enter camera name" />
      </div>
      <div className="form-group">
        <label htmlFor="webCameraId">ID</label>
        <input type="text" className="form-control" id="webCameraId" placeholder="Enter camera ID" />
      </div>
    </form>
  );
};

export default WebCameraForm;

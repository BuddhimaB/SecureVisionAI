import React from 'react';
import './IpCameraForm.css';
import api from "../../api/camera"

const IPCameraForm = () => {
  return (
    <form id="ipCameraForm">
      <div className="form-group">
        <label htmlFor="ipCameraName">Name</label>
        <input type="text" className="form-control" id="ipCameraName" placeholder="Enter camera name" />
      </div>
      <div className="form-group">
        <label htmlFor="ipCameraLink">Link</label>
        <input type="text" className="form-control" id="ipCameraLink" placeholder="Enter camera link" />
      </div>
    </form>
  );
};

export default IPCameraForm;

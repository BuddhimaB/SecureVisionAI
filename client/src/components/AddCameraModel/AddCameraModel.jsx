import React, { useState } from 'react';
import WebCameraForm from '../WebcameraForm/WebCameraForm';
import IPCameraForm from '../IpCameraForm/IpCameraForm';
import './AddCameraModel.css'; // Import the CSS file

const AddCameraPopover = () => {
  const [selectedCameraType, setSelectedCameraType] = useState('web');
  const [showPopover, setShowPopover] = useState(false);

  const handleCameraTypeChange = (event) => {
    setSelectedCameraType(event.target.value);
  };

  const handleTogglePopover = () => {
    setShowPopover(!showPopover); // Toggle popover visibility
  };

  const handleSubmit = () => {
    if (selectedCameraType === 'web') {
      const name = document.getElementById('webCameraName').value;
      const id = document.getElementById('webCameraId').value;
      console.log('Web Camera:', { name, id });
    } else {
      const name = document.getElementById('ipCameraName').value;
      const link = document.getElementById('ipCameraLink').value;
      console.log('IP Camera:', { name, link });
    }
    setShowPopover(false); // Close popover after submission
  };

  return (
    <div>
      {/* Fixed Add Camera Button */}
      <button
        type="button"
        className="fixed-button"
        onClick={handleTogglePopover}
      >
        Add Camera
      </button>

      {/* Floating Popover Menu */}
      {showPopover && (
        <div className="popover-menu">
          <div className="popover-header">
            <h5 className="popover-title">Add Cameras</h5>
            <button type="button" className="close" onClick={handleTogglePopover}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="popover-body">
            <div className="form-group">
              <label>Select camera type</label><br />
              <input
                type="radio"
                id="webCamera"
                name="cameraType"
                value="web"
                checked={selectedCameraType === 'web'}
                onChange={handleCameraTypeChange}
              />
              <label htmlFor="webCamera">Web Camera</label><br />
              <input
                type="radio"
                id="ipCamera"
                name="cameraType"
                value="ip"
                checked={selectedCameraType === 'ip'}
                onChange={handleCameraTypeChange}
              />
              <label htmlFor="ipCamera">IP Camera</label>
            </div>
            {selectedCameraType === 'web' && <WebCameraForm />}
            {selectedCameraType === 'ip' && <IPCameraForm />}
          </div>
          <div className="popover-footer">
            <button type="button" className="btn btn-secondary" onClick={handleTogglePopover}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCameraPopover;

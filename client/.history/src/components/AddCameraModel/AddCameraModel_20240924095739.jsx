import React, { useState } from 'react';
import WebCameraForm from './WebCameraForm';
import IPCameraForm from './IPCameraForm';

const AddCameraModal = () => {
  const [selectedCameraType, setSelectedCameraType] = useState('web');

  const handleCameraTypeChange = (event) => {
    setSelectedCameraType(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedCameraType === 'web') {
      // Collect data from WebCameraForm and send it to the backend
      const name = document.getElementById('webCameraName').value;
      const id = document.getElementById('webCameraId').value;
      console.log('Web Camera:', { name, id });
      // Add your backend connection logic here
    } else {
      // Collect data from IPCameraForm and send it to the backend
      const name = document.getElementById('ipCameraName').value;
      const link = document.getElementById('ipCameraLink').value;
      console.log('IP Camera:', { name, link });
      // Add your backend connection logic here
    }
  };

  return (
    <div className="modal fade" id="addCameraModal" tabIndex="-1" role="dialog" aria-labelledby="addCameraModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addCameraModalLabel">Add Cameras</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
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
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCameraModal;

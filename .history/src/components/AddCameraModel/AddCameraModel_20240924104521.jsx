import React, { useState } from 'react';
import WebCameraForm from '..WebcameraForm/WebCameraForm';
import IPCameraForm from '../IPCameraForm';
import './AddCameraModal.css'; // Make sure you import your CSS for styling

const AddCameraModal = () => {
  const [selectedCameraType, setSelectedCameraType] = useState('web');
  const [showModal, setShowModal] = useState(false);

  const handleCameraTypeChange = (event) => {
    setSelectedCameraType(event.target.value);
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
    setShowModal(false); // Close modal after submission
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Add Camera Button */}
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Add Camera
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Cameras</h5>
                <button type="button" className="close" onClick={closeModal}>
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
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCameraModal;

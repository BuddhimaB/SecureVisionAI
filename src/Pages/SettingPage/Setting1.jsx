// import React, { useState, useEffect } from 'react';
// import './Setting1.css';
// import NavBar from '../../components/NavBar/NavBar';
// import Switch from '@mui/material/Switch';
// import Bottom from '../../components/BottomDetails/Bottom';
// import { useNavigate} from 'react-router-dom';
// import BackButton from '../../components/BackButton/BackButton';

// const Setting1 = () => {
//   const [cameraType, setCameraType] = useState('');
//   const [alarmEnabled, setAlarmEnabled] = useState(false);
//   const [autoDetectionEnabled, setAutoDetectionEnabled] = useState(false);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
   

//   useEffect(() => {
//     // Clear success message after 3 seconds
//     if (successMessage) {
//       const timer = setTimeout(() => {
//         setSuccessMessage('');
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [successMessage]);

  

//   const handleAddCamera = () => {
//     if (!cameraType) {
//       setError('Please select a camera type.');
//     } else {
//       setError('');
      
//     }
//   };

//   const handleSaveSettings = () => {
//     setSuccessMessage('Settings updated successfully.');
    
//   };

//   const navigate = useNavigate();

//   const gotoAddUser  = () => {
//     navigate('/newuser');
//   }

//   return (
//     <>
//       <NavBar />
//       <BackButton/>
//       <div className="settings-container">
//         <h2>Settings</h2>
//         <div className="settings-content">
//           <div className="settings-left">
//             <div className="setting-item">
//               <label>Select Camera Type:</label>
//               <select value={cameraType} onChange={(e) => setCameraType(e.target.value)}>
//                 <option value="">Select</option>
//                 <option value="ip">IP Camera</option>
//                 <option value="web">Web Camera</option>
//               </select>
//               <button className="btn-primary" onClick={handleAddCamera}>Add Camera</button>
//               {error && <p className="error-message">{error}</p>}
//             </div>

//             {/* Automatic Intrusion Detection */}
//             <div className="setting-item">
//               <label>Enable Automatic Intrusion Detection</label>
//               <Switch
//                 checked={autoDetectionEnabled}
//                 onChange={(e) => setAutoDetectionEnabled(e.target.checked)}
//               />
//             </div>                     
//             <div className="setting-item">
//               <label>Enable Alarm:</label>
//               <Switch
//                 checked={alarmEnabled}
//                 onChange={(e) => setAlarmEnabled(e.target.checked)}
//               />
//             </div>
            
//           </div>

//           <div className="settings-right">
//             {/* User Management */}
//             <div className="setting-item">
//               <label>Manage Users:</label>
              
//               <button className="btn-danger">Remove User</button>
//             </div>

            
//             {/* Account Deletion */}
//             <div className="setting-item">
//             <label>Manage System:</label>
//               <button className="delete-btn">Delete System</button>
//             </div>
//             <button className="account-btn">Delete Account</button>
//           </div>
//         </div>

//         {/* Save Button */}
//         <div className="save-container">
//           <button className="btn-save" onClick={handleSaveSettings}>Save</button>
//           {successMessage && <p className="success-message">{successMessage}</p>}
//         </div>
//       </div>
//       <Bottom/>
//     </>
//   );
// };

// export default Setting1;

import React, { useState, useEffect } from 'react';
import './Setting1.css';
import NavBar from '../../components/NavBar/NavBar';
import Switch from '@mui/material/Switch';
import Bottom from '../../components/BottomDetails/Bottom';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';

const Setting1 = () => {
  const [cameraType, setCameraType] = useState('');
  const [alarmEnabled, setAlarmEnabled] = useState(false);
  const [autoDetectionEnabled, setAutoDetectionEnabled] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Clear success message after 3 seconds
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleAddCamera = () => {
    if (!cameraType) {
      setError('Please select a camera type.');
    } else {
      setError('');
    }
  };

  const handleSaveSettings = () => {
    setSuccessMessage('Settings updated successfully.');
  };

  const navigate = useNavigate();

  const gotoAddUser = () => {
    navigate('/newuser');
  };

  return (
    <>
      <NavBar />
      <BackButton />
      <div className="settings-container">
        <h2>Settings</h2>
        <div className="settings-content">
          <div className="settings-left">
            <div className="setting-item">
              <label htmlFor="cameraType">Select Camera Type:</label>
              <select
                id="cameraType"
                value={cameraType}
                onChange={(e) => setCameraType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="ip">IP Camera</option>
                <option value="web">Web Camera</option>
              </select>
              <button className="btn-primary" onClick={handleAddCamera}>
                Add Camera
              </button>
              {error && <p className="error-message">{error}</p>}
            </div>

            {/* Automatic Intrusion Detection */}
            <div className="setting-item">
              <label htmlFor="autoDetection">Enable Automatic Intrusion Detection</label>
              <Switch
                id="autoDetection"
                checked={autoDetectionEnabled}
                onChange={(e) => setAutoDetectionEnabled(e.target.checked)}
              />
            </div>
            <div className="setting-item">
              <label htmlFor="alarmSwitch">Enable Alarm:</label>
              <Switch
                id="alarmSwitch"
                checked={alarmEnabled}
                onChange={(e) => setAlarmEnabled(e.target.checked)}
              />
            </div>
          </div>

          <div className="settings-right">
            {/* User Management */}
            <div className="setting-item">
              <label>Manage Users:</label>
              <button className="btn-danger" onClick={gotoAddUser}>Add User</button>
              <button className="btn-danger">Remove User</button>
            </div>

            {/* Account Deletion */}
            <div className="setting-item">
              <label>Manage System:</label>
              <button className="delete-btn">Delete System</button>
            </div>
            <button className="account-btn">Delete Account</button>
          </div>
        </div>

        {/* Save Button */}
        <div className="save-container">
          <button className="btn-save" onClick={handleSaveSettings}>Save</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Setting1;


import React, { useState, useEffect } from 'react';
import './Setting1.css';
import NavBar from '../../components/NavBar/NavBar';
import Switch from '@mui/material/Switch';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import Bottom from '../../components/BottomDetails/Bottom';
import { useNavigate} from 'react-router-dom';

const Setting1 = () => {
  const [cameraType, setCameraType] = useState('');
  const [intrusionStartTime, setIntrusionStartTime] = useState('');
  const [intrusionEndTime, setIntrusionEndTime] = useState('');
  const [selectedDates, setSelectedDates] = useState([]);
  const [recurring, setRecurring] = useState(false);
  const [alarmEnabled, setAlarmEnabled] = useState(false);
  const [alarmType, setAlarmType] = useState('');
  const [notificationTone, setNotificationTone] = useState('');
  const [email, setEmail] = useState('');
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

  const handleDateChange = (index, newDate) => {
    const updatedDates = [...selectedDates];
    updatedDates[index] = newDate;
    setSelectedDates(updatedDates);
  };

  const addNewDate = () => {
    setSelectedDates([...selectedDates, dayjs()]);
  };

  const handleRecurringChange = (e) => {
    setRecurring(e.target.checked);
  };

  const handleAddCamera = () => {
    if (!cameraType) {
      setError('Please select a camera type.');
    } else {
      setError('');
      
    }
  };

  const handleSaveSettings = () => {
    setSuccessMessage('Settings updated successfully.');
    // Save settings logic here
  };

  const navigate = useNavigate();

  const gotoAddUser  = () => {
    navigate('/newuser');
  }

  return (
    <>
      <NavBar />
      <div className="settings-container">
        <h2>Settings</h2>
        <div className="settings-content">
          <div className="settings-left">
            {/* Camera Settings */}
            <div className="setting-item">
              <label>Select Camera Type:</label>
              <select value={cameraType} onChange={(e) => setCameraType(e.target.value)}>
                <option value="">Select</option>
                <option value="ip">IP Camera</option>
                <option value="web">Web Camera</option>
              </select>
              <button className="btn-primary" onClick={handleAddCamera}>Add Camera</button>
              {error && <p className="error-message">{error}</p>}
            </div>

            {/* Automatic Intrusion Detection */}
            <div className="setting-item">
              <label>Enable Automatic Intrusion Detection</label>
              <Switch
                checked={autoDetectionEnabled}
                onChange={(e) => setAutoDetectionEnabled(e.target.checked)}
              />
            </div>

            {/* Conditionally Render Intrusion Detection Settings */}
            {autoDetectionEnabled && (
              <div>
                {/* Intrusion Detection Settings */}
                <div className="setting-item">
                  <label>Intrusion Detection Time:</label>
                  <div className="time-selection">
                    <TextField
                      label="Start Time"
                      type="time"
                      value={intrusionStartTime}
                      onChange={(e) => setIntrusionStartTime(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      size="small"
                    />
                    <TextField
                      label="End Time"
                      type="time"
                      value={intrusionEndTime}
                      onChange={(e) => setIntrusionEndTime(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      size="small"
                    />
                  </div>
                  <div className="date-selection">
                    <label>Select Dates:</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      {selectedDates.map((date, index) => (
                        <DatePicker
                          key={index}
                          value={date}
                          onChange={(newDate) => handleDateChange(index, newDate)}
                          renderInput={(params) => <TextField {...params} variant="outlined" size="small" />}
                        />
                      ))}
                    </LocalizationProvider>
                    <button className="btn-secondary" onClick={addNewDate}>Add Date</button>
                    <div className="recurring-option">
                      <label>
                        <Switch
                          checked={recurring}
                          onChange={handleRecurringChange}
                        />
                        Repeat Every Day
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Alarm Settings */}
            <div className="setting-item">
              <label>Enable Alarm:</label>
              <Switch
                checked={alarmEnabled}
                onChange={(e) => setAlarmEnabled(e.target.checked)}
              />
            </div>
            {alarmEnabled && (
              <div className="setting-item">
                <label>Select Alarm Type:</label>
                <select value={alarmType} onChange={(e) => setAlarmType(e.target.value)}>
                  <option value="">Select</option>
                  <option value="notification">Notification</option>
                  <option value="email">Email</option>
                  <option value="both">Both</option>
                </select>
                {alarmType === 'notification' && (
                  <div className="setting-item">
                    <label>Select Notification Tone:</label>
                    <select
                      value={notificationTone}
                      onChange={(e) => setNotificationTone(e.target.value)}
                    >
                      <option value="">Select Tone</option>
                      <option value="tone1">Tone 1</option>
                      <option value="tone2">Tone 2</option>
                    </select>
                  </div>
                )}
                {alarmType.includes('email') && (
                  <div className="setting-item">
                    <label>Enter Email Address:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="settings-right">
            {/* User Management */}
            <div className="setting-item">
              <label>Manage Users:</label>
              <button className="btn-primary" onClick={gotoAddUser}>Add User</button>
              <button className="btn-danger">Remove User</button>
            </div>

            
            {/* Account Deletion */}
            <div className="setting-item">
              <button className="delete-btn">Delete Account</button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="save-container">
          <button className="btn-save" onClick={handleSaveSettings}>Save</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
      
    </>
  );
};

export default Setting1;

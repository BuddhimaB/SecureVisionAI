import React from 'react';
import './IpCameraForm.css';
import { Button, CircularProgress, TextField } from "@mui/material";
import api from "../../api/camera"; // Import the camera API module
import React, { useEffect, useRef, useState } from 'react';
import flaskCameraApi from "../../api/flaskCameraApi";


const IPCameraForm = () => {

  const videoRef = useRef(null); // Reference for video element
  const [loading, setLoading] = useState(false); // Loading state
  const [cameraId, setCameraId] = useState(''); // State for camera ID
  const [name, setName] = useState(''); // State for camera name
  const [error, setError] = useState(''); // State for error messages
  const [isStreaming, setIsStreaming] = useState(false); // Streaming state
  const [authToken,setAuthToken] =useState(localStorage.getItem('token'));
  const[systemId,setSystemId] = useState("1c2b187e-6ec2-4b6f-912b-04d6cbfea2b8");
  
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

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Bottom from '../../components/BottomDetails/Bottom';
import NavBar from '../../components/NavBar/NavBar';
import Switch from '@mui/material/Switch';
import { getCameraData } from '../../services/vision-api';
import { MODEL_API_HOST } from '../../constants';
import AddCameraPopover from '../../components/AddCameraModel/AddCameraModel';
import api from "../../api/camera";
import flaskCameraApi from "../../api/flaskCameraApi";


// Dummy camera data 
const cameraData = [
  { id: 1, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 1' },
];

const users = [
  { id: 1, name: "User 1", img: "https://www.imagella.com/cdn/shop/products/fec5e9f79ee323f367b0fec5d7177663_89776d30-f406-46cf-8a1b-c58b59aa9d54.jpg?v=1708376164", profileUrl: "/profile/1" },
  { id: 2, name: "User 2", img: "https://sharedp.com/wp-content/uploads/2024/06/cute-dp-for-girls-cartoon-4k-960x1024.jpg", profileUrl: "/profile/2" },
  { id: 3, name: "User 3", img: "https://thumbs.dreamstime.com/b/cute-icon-d-old-woman-avatar-elderly-pensioner-grandmothers-portrait-happy-retired-cartoon-face-adult-grandma-senorita-person-cute-274469476.jpg", profileUrl: "/profile/3" },
];

const lastIntrusion = {
  dateTime: '2024-08-15 14:45:00',
  src: 'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png',
};

const Home = () => {
  const [showAllCameras, setShowAllCameras] = useState(false);
  const [cameraId, setCameraId] = useState(localStorage.getItem('cameraId')); // Initialize state
  const [token,setToken]=useState(localStorage.getItem('token'));
  const [cameraStatus, setCameraStatus] = useState(localStorage.getItem('cameraStatus'));
  const [systemId,setSystemId] = useState(localStorage.getItem('SystemId'));
  const [isCameraVisible, setIsCameraVisible] = useState(!!cameraId); // Initialize based on cameraId

const handlegotoRecordings = () => {
  navigate('/recordings');
};


  // Fetch camera data on mount
 /* useEffect(() => {
    const res = getCameraData();
    console.log(res);
  }, []);*/

  // Function to handle "See All" click
  const handleSeeAll = (e) => {
    e.preventDefault();
    setShowAllCameras(!showAllCameras);
  };

  // Listen for `cameraId` changes in localStorage
  useEffect(() => {
    const updateCameraId = () => {
      const updatedCameraId = localStorage.getItem('cameraId');
      if (updatedCameraId && updatedCameraId !== cameraId) {
        setCameraId(updatedCameraId); // Update state
        console.log("This is the camera that integrated");
        console.log(updatedCameraId);
      }
    };

    // Initial fetch of the latest cameraId
    updateCameraId();

    // Listen for changes in `localStorage` across different tabs/windows
    window.addEventListener('storage', updateCameraId);

    // Use an interval to check for updates in the same tab
    const intervalId = setInterval(() => {
      updateCameraId();
    }, 1000); // Check every second, adjust the interval timing as necessary

    // Clean up the event listener and interval
    return () => {
      window.removeEventListener('storage', updateCameraId);
      clearInterval(intervalId);
    };
    
  }, [cameraId]);

  // Delete camera function
  // State to store camera data
const [cameras, setCameras] = useState(cameraData);

const handleDeleteCamera = async () => {
  try {
    const deleteresponse = await api.deleteCamera(cameraId, token);
    const deletelocally = await api.locallydeleteCamera(cameraId);
    console.log("This is the response from delete camera",deletelocally);
    localStorage.removeItem('cameraId'); // Clear the cameraId from localStorage

    setIsCameraVisible(false); // Hide the camera

    // Remove the deleted camera from the list
    setCameras(cameras.filter(camera => camera.id !== cameraId));
    // Optionally clear the cameraId
    setCameraId(null);
    console.log("Camera deleted successfully");
  } catch (error) {
    console.error("Error deleting camera:", error.message);
  }


};

const handleRecordCamera = async () =>{
  console.log(systemId);
  console.log(cameraStatus);
  console.log(cameraId);

  const newStatus = cameraStatus === "RUNNING" ?  "STOP" : "RUNNING"; // Toggle the status
  const data = {
    id: cameraId,
    systemId: systemId,
    status: newStatus,
  };
  try {
    const camResponse = await api.changeCameraMonitoringStatus(data, token);
    setCameraStatus(newStatus); // Update the status in state
    console.log("This is the response from record camera",camResponse);

  }
  catch (error) {
    console.error("Error recording camera:", error.message);
  }

}


  const camerasToShow = showAllCameras ? cameraData : cameraData.slice(0, 4);

  const navigate = useNavigate();
  const gotoIntrusion = () => {
    console.log(cameraId); // Use the state value for `cameraId`
    navigate('/intrusion');
  };

  return (
    <div>
      <NavBar />

      <div>
        <AddCameraPopover />
      </div>

      <div className="dashboard-container">
        <div className={`left-section ${showAllCameras ? 'expanded' : ''}`}>
          <h2 className='left-title'>Active Cameras: {cameraData.length} cameras</h2>
          <button className='btn view-more-btn' onClick={handlegotoRecordings}> Recorded Videos </button>
          <div className="camera-grid">
            {/* Display the current cameraId and corresponding live video feed */}
            <p>Camera ID: {cameraId}</p> {/* Display the current cameraId */}

            {isCameraVisible && (
              <section className="camera-section">
                <img
                  key={cameraId}
                  src={`${MODEL_API_HOST}/video_feed/${cameraId}`}
                  width={380}
                  height={240}
                  alt="CCTV video"
                  // onError={(event) => {
                  //   console.error('Error loading', event);
                  //   console.error('Error loading the image:', event.target.src);
                  //   event.target.src =
                  //     "https://www.svgrepo.com/show/343419/computer-error.svg";
                  //   event.onerror = null;
                  // }}
                />
                <button onClick={handleRecordCamera} className='record-camera'>Start Recording</button>
                <button onClick={handleDeleteCamera} className="delete-button"> Delete Camera</button>
              </section>
            )}
          </div>
          <a href="/" className="see-all-link" onClick={handleSeeAll}>
            {/* {showAllCameras ? 'Show Less' : 'See All'} */}
          </a>
        </div>

        <div className="right-section">
          <div className="right-section-top">
            <div className="toggle-switch">
              <h3>Auto Detection</h3>
              <Switch color="error" />
            </div>
            <div className="last-intrusion">
              <h3>Last Intrusion</h3>
              <p>Date and Time: {lastIntrusion.dateTime}</p>
              <img src={lastIntrusion.src} alt='Intrusion' />
            </div>
            <button className='btn view-more-btn' onClick={gotoIntrusion}>View More</button>
          </div>

          <div className="right-section-bottom">
            <h2>Users</h2>
            <div className="user-images">
              {users.map((user) => (
                <img
                  key={user.id}
                  src={user.img}
                  alt={user.name}
                  style={{ cursor: 'pointer' }}
                />
              ))}
              <a href='/newuser'><img src='https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_960_720.png' /></a>
            </div>
          </div>
        </div>
      </div>

      <Bottom />
    </div>
  );
};

export default Home;

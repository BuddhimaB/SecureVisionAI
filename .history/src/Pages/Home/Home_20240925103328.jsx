import React, { useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import './Home.css';
import Bottom from '../../components/BottomDetails/Bottom';
import NavBar from '../../components/NavBar/NavBar';
import Switch from '@mui/material/Switch';
import { getCameraData } from '../../services/vision-api';
import { MODEL_API_HOST } from '../../constants';
import AddCameraModal from '../../components/AddCameraModel/AddCameraModel';
import AddCameraPopover from '../../components/AddCameraModel/AddCameraModel';


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
    src:'https://www.distributor-cctv.com/blog/wp-content/uploads/2017/05/Fitur-Motion-Detection-Di-Kamera-CCTV.png',  
};  

const Home = () => {
  const [showAllCameras, setShowAllCameras] = useState(false); 

  useEffect(() =>
    {
      const res = getCameraData();
      console.log(res); 
    }, []);

  // Function to handle "See All" click
  const handleSeeAll = (e) => {
    e.preventDefault();
    setShowAllCameras(!showAllCameras);
  };


  const cameraId = localStorage.getItem('cameraId');
  const cameraId2 = localStorage.getItem('cameraId2');


  useEffect(()=>{
    console.log("This is the camera that integrated")
    console.log(cameraId)
  },[cameraId])

  
  const camerasToShow = showAllCameras ? cameraData : cameraData.slice(0, 4);
  
  const navigate = useNavigate();
  const gotoIntrusion = () => {
    navigate('/intrusion');
  }

  return (
    <div>
      <NavBar />

      <div>
      <AddCameraPopover />
    </div>

      <div className="dashboard-container">
        <div className={`left-section ${showAllCameras ? 'expanded' : ''}`}>
          <h2 className='left-title'>Active Cameras: {cameraData.length} cameras</h2>
          <div className="camera-grid">
            {camerasToShow.map((camera) => (
              <video key={camera.id} src={camera.src} controls></video>
            ))}
          </div>
          <a href="/" className="see-all-link" onClick={handleSeeAll}>
            {showAllCameras ? 'Show Less' : 'See All'}
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

          <img
          src={`${MODEL_API_HOST}/video_feed/${cameraId}`}
          console
          width={380}
          height={240}
          alt="CCTV video"
          onError={(event) => {
            event.target.src =
              "https://www.svgrepo.com/show/343419/computer-error.svg";
            event.onerror = null;
          }}
        />

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
                <a href='/newuser'><img src='https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_960_720.png'/></a>
            </div>
          </div>
        </div>
      </div>

      <Bottom />
    </div>
  );
};

export default Home;

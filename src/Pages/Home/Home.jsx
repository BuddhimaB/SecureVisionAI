import React, { useState} from 'react';
import { useNavigate} from 'react-router-dom';
import './Home.css';
import Bottom from '../../components/BottomDetails/Bottom';
import NavBar from '../../components/NavBar/NavBar';
import Switch from '@mui/material/Switch';

// Dummy camera data 
const cameraData = [
  { id: 1, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 1' },
  { id: 2, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 2' },
  { id: 3, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 3' },
  { id: 4, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 4' },
  { id: 5, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 5' },
  { id: 6, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 6' },
  { id: 7, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 7' },
  { id: 8, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 8' },
  { id: 9, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 9' },
  { id: 10, src: 'https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4', name: 'Camera 10' }  
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
  const [showPopup, setShowPopup] = useState(false);
  const [cameraType, setCameraType] = useState('IP');
  const [formValues, setFormValues] = useState({ name: '', link: '', id: '' });

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormValues({ name: '', link: '', id: '' });
  };

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleCameraTypeChange = (e) => {
    setCameraType(e.target.value);
    setFormValues({ name: '', link: '', id: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Camera Details:', formValues);
    handleClosePopup();
  };
  // Function to handle "See All" click
  const handleSeeAll = (e) => {
    e.preventDefault();
    setShowAllCameras(!showAllCameras);
  };

  
  const camerasToShow = showAllCameras ? cameraData : cameraData.slice(0, 2);
  
  const navigate = useNavigate();
  const gotoIntrusion = () => {
    navigate('/intrusion');
  }
  const gotoUser = () => {
    navigate('/user');
  }

  return (
    <div>
      <NavBar />

      <div className="dashboard-container">
        <div className='left-section'>
        <div className='camera-integration-section'>
          <h2>Camera Integration</h2>
          <button className="btn add-camera-btn" onClick={handleOpenPopup}>Add Camera</button>
        </div>
        <div className={`left-section-bottom ${showAllCameras ? 'expanded' : ''}`}>
        
          <h2 className='left-title'>Active Cameras: {cameraData.length} cameras</h2>
          <div className="camera-grid">
            {camerasToShow.map((camera) => (
              <video key={camera.id} src={camera.src} controls data-testid="camera-video"></video>
            ))}
          </div>
          <a href="/" className="see-all-link" onClick={handleSeeAll}>
            {showAllCameras ? 'Show Less' : 'See All'}
          </a>
        </div>
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
                <a href='/newuser'><img src='https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_960_720.png'/></a>
            </div>
            <button className='btn view-more-btn' onClick={gotoUser}>User Details</button>
          </div>
        </div>
      </div>

      <Bottom />
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Add {cameraType === 'IP' ? 'IP Camera' : 'Web Camera'}</h3>
            <form onSubmit={handleFormSubmit}>
              <label>
                Camera Type:
                <select value={cameraType} onChange={handleCameraTypeChange}>
                <option value="IP">IP Camera</option>
                <option value="Web">Web Camera</option>
              </select>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleFormChange}
                  required
                />
              </label>
              {cameraType === 'IP' ? (
                <label>
                  Link:
                  <input
                    type="text"
                    name="link"
                    value={formValues.link}
                    onChange={handleFormChange}
                    required
                  />
                </label>
              ) : (
                <label>
                  ID:
                  <input
                    type="text"
                    name="id"
                    value={formValues.id}
                    onChange={handleFormChange}
                    required
                  />
                </label>
              )}
              
              </label>
              <button type="submit" className='btn'>Add Camera</button>
              <button type="button" onClick={handleClosePopup}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;


import './Home.css'
import Bottom from '../../components/BottomDetails/Bottom'
import NavBar from '../../components/NavBar/NavBar'
import Switch from '@mui/material/Switch';


const Home = () => {
  return (
    <div>
      <NavBar />
      
      <div className="dashboard-container">
            <div className="left-section">
                <h2>Active Cameras: 4 cameras</h2>
                <div className="camera-grid">
                    {/* Placeholder for video tags, replace src with actual video URLs */}
                    <video src="https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4" controls></video>
                    <video src="https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4" controls></video>
                    <video src="https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4" controls></video>
                    <video src="https://videos.pexels.com/video-files/5222540/5222540-uhd_2560_1440_30fps.mp4" controls></video>
                    
                </div>
                <a href="/" className="see-all-link">See All</a>
            </div>
            <div className="right-section">
                <div className="right-section-top">
                    <div className="toggle-switch">
                        <h3>Auto Detection</h3>
                        <Switch color="error" />
                    </div>
                    
                    <div className="last-intrusion">
                        <h3>Last Intrusion:</h3>
                        <img src="https://media-sin6-3.cdn.whatsapp.net/v/t61.24694-24/324668139_1209719473804790_6806830291563957833_n.jpg?ccb=11-4&oh=01_Q5AaIGkBGgcrQSqfnM-Xr06ajyQ5k0F3kIBlC8Gx8h4A7BZm&oe=66A5A809&_nc_sid=e6ed6c&_nc_cat=107" alt="Last Intrusion" />
                        
                    </div>
                </div>
                             
                <div className="right-section-bottom">
                    <h2>Users</h2>
                    <div className="user-images">
                        {/* Placeholder for user images, replace src with actual image URLs */}
                        <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="User 1" />
                        <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="User 2" />
                        <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="User 3" />
                        <img src="https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_960_720.png" alt="User 3" />
                    </div>
                </div>
            </div>
        </div>
      
      <Bottom />
    </div>
  )
}

export default Home
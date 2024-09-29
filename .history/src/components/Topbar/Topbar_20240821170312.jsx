import { useNavigate } from 'react-router-dom';
import './Topbar.css'
import SecureVision from '../../assets/SecureVision.png'

export default function Topbar() {
  const Navigate = useNavigate();
  const gotoRegister = () => {
    Navigate('/register');
  }
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">
              // Replace the src attribute with the actual image UR
            </span>
        </div>
        
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Contact</span>
                <span 
                onClick={gotoRegister} 
                className="topbarLink">Register</span>
            </div>
            
        </div>
      
    </div>
  )
}

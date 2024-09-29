import { useNavigate } from 'react-router-dom';
import './Topbar.css'
import SecureVision from '../../../public'

export default function Topbar() {
  const Navigate = useNavigate();
  const gotoRegister = () => {
    Navigate('/register');
  }
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">
              <img src={SecureVision} alt="Secure Vision"/>
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

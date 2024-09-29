import { useNavigate, useLocation } from 'react-router-dom';
import './Topbar.css'
import SecureVision from '../../assets/SecureVision.png';

export default function Topbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const gotoRegister = () => {
    navigate('/register');
  }

  const gotoLogin = () => {
    navigate('/');
  }

  const gotoContact = () => {
    navigate('/contact');
  }

  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">
          <img className='logoimg' src={SecureVision} alt="Secure Vision"/>
        </span>
      </div>
      
      <div className="topbarRight">
        <div className="topbarLinks">
          <span 
            onClick={gotoContact}
            className="topbarLink">Contact</span>

          {location.pathname === '/' ? (
            <span 
              onClick={gotoRegister} 
              className="topbarLink">Register</span>
          ) : location.pathname === '/register' ? (
            <span 
              onClick={gotoLogin} 
              className="topbarLink">Login</span>
          ) : null}

        </div>
      </div>
    </div>
  )
}

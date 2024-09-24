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
          

          {location.pathname === '/' ? (
            <div>
            <span 
            onClick={gotoContact}
            className="topbarLink">Contact</span>
            <span 
              onClick={gotoRegister} 
              className="topbarLink">Register</span>
            </div>
          ) : location.pathname === '/register' ? (
            <div>
            <span 
            onClick={gotoContact}
            className="topbarLink">Contact</span>
            <span 
              onClick={gotoLogin} 
              className="topbarLink">Login</span>
            </div>
          ) : location.pathname === '/contact' ? (
            <span 
              onClick={gotoLogin} 
              className="topbarLink">Login</span>
          ):null}

        </div>
      </div>
    </div>
  )
}

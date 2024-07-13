import './Bottom.css'
import CopyrightIcon from '@mui/icons-material/Copyright';


export default function Bottom() {
  return (
    <div className='bottomContainer'>
        <div className='bottomLeft'>
            <CopyrightIcon />
            <span>2024 SecureVisionAI. All Rights Reserved</span>
        </div>
        <div className='bottomCenter'>
            <span>Privacy Policy</span>
        </div>
        <div className='bottomRight'>
            <span>Follow us on: </span>

        </div>
    </div>
  )
}

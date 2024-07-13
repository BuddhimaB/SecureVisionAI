import './Bottom.css'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Bottom() {
  return (
    <div className='bottomContainer'>
        <div className='bottomLeft'>
            <CopyrightIcon className='\' />
            <span>2024 SecureVisionAI. All Rights Reserved</span>
        </div>
        <div className='bottomCenter'>
            <span>Privacy Policy</span>
        </div>
        <div className='bottomRight'>
            <span>Follow us on: </span>

            <FacebookIcon  className='icons'/>
            <YouTubeIcon className='icons'/>

        </div>
    </div>
  )
}

import './Register.css'
import Topbar from '../../components/Topbar/Topbar'
import Bottom from '../../components/BottomDetails/Bottom'

export default function Register() {
  return (
    <div className='RegisterContainer'>
        <Topbar />
       
        <Bottom className='bottomPart'/>
    </div>
    
  )
}

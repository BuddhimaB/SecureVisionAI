import './Login.css'
import Topbar from '../../components/Topbar/Topbar'
import Bottom from '../../components/BottomDetails/Bottom'

export default function Login() {
  return (
    <div>
      <Topbar /> 
      <div className='feedContainer'>
        <div className="feedLeft">
          <h1>Welcome Back!</h1>
          <h4> Please enter your details</h4>
          <div className="inputField">
          <input 
          className='inputField'
          type="text" 
          placeholder="Username" />
          
          <input className='inputField' 
          type="password" 
          placeholder="Password" />
          </div>
          <button className="loginButton">Login</button>
          <span>Forgot Password?</span>
        </div>
        
        <div className="feedRight">
          <h4>IMAGE</h4>
          
        </div>
        </div>
        <Bottom />   
    </div>
  )
}

import 
import Topbar from '../../components/Topbar/Topbar'

export default function Login() {
  return (
    <div>
      <Topbar /> 
      <div className='feedContainer'>
        <div className="feedLeft">
          <h1>Welcome Back!</h1>
          <h4> Please enter your details</h4>
          <div className="inputField">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          </div>
          <button className="loginButton">Login</button>
          <span>Forgot Password?</span>
        </div>
        <div className="feedCenter"></div>
        <div className="feedRight"></div>
        </div>   
    </div>
  )
}

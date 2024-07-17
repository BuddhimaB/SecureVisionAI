import './Login.css'
import Topbar from '../../components/Topbar/Topbar'
import Bottom from '../../components/BottomDetails/Bottom'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useSta('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Temporary login details
    const tempUsername = 'admin';
    const tempPassword = 'password';

    if (username === tempUsername && password === tempPassword) {
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

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
          placeholder="Username" 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}/>
          
          <input className='inputField' 
          type="password" 
          placeholder="Password" />
          </div>
          <button className="loginButton">Login</button>
          <span className='fogotPass'>Forgot Password?</span>
        </div>
        
        <div className="feedRight">
          <h4>IMAGE</h4>
          
        </div>
        </div>
        <Bottom />   
    </div>
  )
}

import Login from "./Pages/Login/login";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate
} from 'react-router-dom';
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Intrusion from "./Pages/Intrusions/Intrusion";
import Contact from "./Pages/ContactUs/Contact";
import NewUser from "./Pages/NewUser/NewUser";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Setting1 from "./Pages/SettingPage/Setting1";
import PasswordReset from "./Pages/PasswordReset/PasswordReset";
import UserProfile from "./Pages/User/UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route exact path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/setting' element={<Setting1 />} />
        <Route path='/intrusion' element={<Intrusion />} />
        
        <Route path='/contact' element={<Contact />} />
        <Route path='/newuser' element={<NewUser />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset' element={<PasswordReset />} />
        <Route path='/user' element={<UserProfile />} />
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;

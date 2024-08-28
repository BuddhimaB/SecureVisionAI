import Login from "./Pages/Login/login";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate
} from 'react-router-dom';
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
<<<<<<< Updated upstream
=======
import Profile from "./Pages/Profile/Profile";
import Intrusion from "./Pages/Intrusions/Intrusion";
import Contact from "./Pages/ContactUs/Contact";
import NewUser from "./Pages/NewUser/NewUser";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Setting1 from "./Pages/SettingPage/Setting1";
import PasswordReset from "./Pages/PasswordReset/PasswordReset";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
<<<<<<< Updated upstream
=======
        <Route path='/profile' element={<Profile/>} />
        <Route path='/setting' element={<Setting1 />} />
        <Route path='/intrusion' element={<Intrusion />} />
        // add route for Contact
        <Route path='/contact' element={<Contact />} />
        <Route path='/newuser' element={<NewUser />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset' element={<PasswordReset />} />
>>>>>>> Stashed changes
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;

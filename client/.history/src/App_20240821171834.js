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
import Setting from "./Pages/Settings/Setting";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/setting' element={<Setting />} />
        
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;

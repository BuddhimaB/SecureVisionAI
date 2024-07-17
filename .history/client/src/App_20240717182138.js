import Login from "./Pages/Login/login";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate
} from 'react-router-dom';
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Ho />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;

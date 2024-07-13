import Login from "./Pages/Login/login";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;

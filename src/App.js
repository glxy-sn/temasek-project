import './App.css';
import { Navigate } from 'react-router-dom';
import Login from './Pages/Login';
// import DashboardRa from "./Pages/DashboardRa"

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <DashboardRa/> */}
    </div>
  );
}

export default App;

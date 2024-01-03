import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Home';
import './Assets/Css/Home.css';
import { Route, Routes } from 'react-router-dom';
import Log from './Components/Login';
import Reg from './Components/Register';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/Home' element={<Main />} />
    <Route path="/login" element={<Log />} />
    <Route path="/Register" element={<Reg />} />
    </Routes>
    <Dashboard/>
    </div>
  );
}

export default App;
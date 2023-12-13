import './App.css';
import Nav from './Components/Nav';
import './Assets/Css/Login.css'
import Main from './Components/Home';
import './Assets/Css/Home.css'
import { Route, Routes } from 'react-router-dom';
import Log from './Components/Login';
import Reg from './Components/Register';
// import {Route, Routes } from "react-router-dom";

function App() {
  return (
   <div className="App">
   <Routes>
   <Route path='/Home' element={<Main/>}/>
   <Route path="/" element={<Log/>}/>
   <Route path="/Register" element={<Reg/>}/>
   </Routes>
   </div>
  );
}

export default App;

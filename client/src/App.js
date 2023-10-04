import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Leftbar from './components/Leftbar/Leftbar';
import './App.css';

function App() {
  var [str,cstr]=React.useState(localStorage.getItem("Verified"))
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={str?<Leftbar/>:<Login />}>
        <Route index element={str?<Leftbar/>:<Login />}/>
        <Route path="/home" element={str?<Leftbar/>:<Login />}/>
        <Route path="*" element={str?<Leftbar/>:<Login />}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
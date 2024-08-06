<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import Home from './PAGES/Home/Home';
import Login from './PAGES/Login/Login';
import Flowchart from './COMPONENTS/flowchart';
import MainFlow from './PAGES/Flows/MainFlow/Flows';
import './App.css';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Home/>} />
          <Route path='/flowchart' element={<MainFlow />} />
        </Routes>
    </>
  );
}

export default App;
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
// import Profile from './Components/Home/profile';
// import Flowchart from './Components/Flowchart/flowchart';

export default function App() {
  const clientId = '1046741513914-iprcol8k4pqgu1h1ivpgsla0km5aj4qp.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bitlinks" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/flowchart" element={<Flowchart />} /> */}
      </Routes>
    </GoogleOAuthProvider>
  );
}
>>>>>>> 3d320148f417ee042ce916df1243c87031b72ebb

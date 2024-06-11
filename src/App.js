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

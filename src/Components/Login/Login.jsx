import React from 'react';
import { GoogleLogin } from '@react-oauth/google'; // Import the GoogleLogin component
import { useNavigate } from 'react-router-dom';
import Bitimg from '../../Assets/bit.png';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = (tokenResponse) => {
    const { credential } = tokenResponse;
    const payload = JSON.parse(atob(credential.split('.')[1])); // Decode the JWT to extract user info

    const userProfile = {
      name: payload.name,
      picture: payload.picture,
    };

    console.log('Logged in successfully:', userProfile);

    // Navigate to the profile page with user data
    navigate('/bitlinks', { state: userProfile });
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <div className='login-body'>
    <div className="Login">
      <div className="welcome-message">Welcome Back!</div>
      
      <div className="portal-title">
        <img className='bitimg' src={Bitimg} alt='bitimage'></img>
      </div>
      <h2>BIT - LINKS</h2>
      <div className="gsignin">
      <GoogleLogin
        clientId="1046741513914-iprcol8k4pqgu1h1ivpgsla0km5aj4qp.apps.googleusercontent.com" // Replace with your actual client ID
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
      </div>
      <div className="sign-in-note">Sign in with your BIT account</div>
    </div>
    </div>
  );
}

export default Login;

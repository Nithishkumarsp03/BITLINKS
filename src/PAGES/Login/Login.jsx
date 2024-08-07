import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Login({onLogin}) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLoginSuccess = async (response) => {
    const { credential } = response;
    const payload = JSON.parse(atob(credential.split('.')[1]));

    const userProfile = {
      name: payload.name,
      picture: payload.picture,
      email: payload.email,
    };


    try {
      const res = await fetch('http://localhost:8000/api/google', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userProfile),
      });

      if (res.ok) {
        const data = await res.json();
        const {message} = data
        Cookies.set('userProfile', JSON.stringify(userProfile), { expires: 1 }); // expires in 1 day

        if(message === 'Login successful'){
            // onLogin();
            navigate('/dashboard');
        }
        else{
            setError('Login failed! Unauthorised Access');
        }

      } else {
        console.log('Login Failed');
        setError('Login Failed');
      }

    } catch (error) {
      console.error('Error Logging in:', error);
      setError('Error Logging in. Please try again later.');
    }

  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <div className='gsignin'>
      <GoogleOAuthProvider clientId="1046741513914-iprcol8k4pqgu1h1ivpgsla0km5aj4qp.apps.googleusercontent.com">
        <div className="container">
          <div className="google">
            <GoogleLogin 
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
            />
          </div>
          {error && <div className="error">{error}</div>}
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

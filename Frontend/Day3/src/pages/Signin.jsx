// Signin.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate()
  const handleSignIn = () => {
    // Perform your sign-in logic, e.g., make an API call

    // For simplicity, let's assume the sign-in is successful
    const userData = {
      name,
      email,
      // Add more user-related data if needed
    };

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    // Redirect to the dashboard after sign-in
    navigate('/dashboard');
  };

  return (
    <div className="signin-all">
      <div className="signin-container">
        <h1>Sign Up</h1>
        <div className="signin-fields">
          <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;

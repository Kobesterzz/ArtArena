// LandingPage.js
import React from 'react';
import './css/LandingPage.css';

function LandingPage({ navigateToPage }) {
  return (
    <div className="landing-page">
      <h1>Welcome to Art Arena</h1>
      <p>Discover amazing art, connect with artists, and share your creations.</p>
      <div className="button-group">
        <button onClick={() => navigateToPage('login')}>Log In</button>
        <button onClick={() => navigateToPage('signup')}>Sign Up</button>
      </div>
    </div>
  );
}

export default LandingPage;

// LandingPage.js
import React from 'react';
import './css/LandingPage.css';
import lp from '/Users/kobesterzz/Documents/ArtArena/src/img/LP.jpg';
import { useNavigate } from 'react-router-dom';

function LandingPage({ navigateToPage }) {

  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landingPageContent">
        <div className="dim"></div>
        <img src={lp} className="bgIMG"></img>
        <h1 className="intro">Welcome to <span className='title'>Art Arena</span></h1>
        <div className="bottomContent">
          <p>Discover amazing art, connect with artists, and share your creations.</p>
          <div className="button-group">
            <button onClick={() => navigate('/login')}>Log In</button>
            <button onClick={() => navigate('/createAccount')}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

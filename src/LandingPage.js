// LandingPage.js
import React from 'react';
import './css/LandingPage.css';
import lp from '/Users/kobesterzz/Documents/ArtArena/src/img/LP.jpg'

function LandingPage({ navigateToPage }) {
  return (
    <div className="landing-page">
      <div className="landingPageContent">
        <img src={lp} class="bgIMG"></img>
        <h1 className="intro">Welcome to <span className='title'>Art Arena</span></h1>
        <div className="bottomContent">
          <p>Discover amazing art, connect with artists, and share your creations.</p>
          <div className="button-group">
            <button onClick={() => navigateToPage('login')}>Log In</button>
            <button onClick={() => navigateToPage('createAccount')}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

// LandingPage.js
import React, { useEffect } from 'react';
import './css/LandingPage.css';
import lp from '/Users/kobesterzz/Documents/ArtArena/src/img/LP.jpg';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';


function LandingPage({ navigateToPage }) {

  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

   // Anime.js animation on mount
   useEffect(() => {
    anime({
      targets: '.animated-text',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: 500,
    });
  }, []);


  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="dim"></div>
      <img src={lp} className="bgIMG"></img>
      <div className="landingPageContent">
        <div className="rightsideContent">
          
          <svg viewBox="0 0 500 100" className="animated-text">
            <text x="10" y="50" font-size="48">Welcome to Art Arena</text>
          </svg>
        </div>

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

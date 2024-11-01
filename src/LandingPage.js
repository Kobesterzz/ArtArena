// LandingPage.js
import React, { useEffect } from 'react';
import './css/LandingPage.css';
import lp from '/Users/kobesterzz/Documents/ArtArena/src/img/LP.jpg';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';


function LandingPage() {
  const navigate = useNavigate();

  // Anime.js animation on mount
  useEffect(() => {
    const letters = document.querySelectorAll('.animated-text tspan');

    anime.timeline({ easing: 'easeInOutSine' })
      .add({
        targets: letters,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1000,
        delay: anime.stagger(300),
      });
  }, []);

  return (
    <div className="landing-page">
      <div className="dim"></div>

      {/* Background image and animated text container */}
      <div className="bg-container">
        <img src={lp} className="bgIMG" alt="Background" />

        {/* Positioned animated text SVG */}
        <svg viewBox="0 0 1200 300" className="animated-text">
          <text x="50%" y="50%" font-size="120" dominant-baseline="middle" text-anchor="middle">
            <tspan className="white">W</tspan>
            <tspan className="white">e</tspan>
            <tspan className="white">l</tspan>
            <tspan className="white">c</tspan>
            <tspan className="white">o</tspan>
            <tspan className="white">m</tspan>
            <tspan className="white">e</tspan>
            <tspan dx="20" className="white">t</tspan>
            <tspan className="white">o</tspan>
            <tspan dx="20" className="green">A</tspan>
            <tspan className="green">r</tspan>
            <tspan className="green">t</tspan>
            <tspan dx="20" className="green">A</tspan>
            <tspan className="green">r</tspan>
            <tspan className="green">e</tspan>
            <tspan className="green">n</tspan>
            <tspan className="green">a</tspan>
          </text>
        </svg>
      </div>

      <div className="landingPageContent">
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

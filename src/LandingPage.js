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
    const letters = document.querySelectorAll('.animated-text tspan');

    anime.timeline({ easing: 'easeInOutSine' })
      .add({
        targets: letters,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1000, // Duration for each letter
        delay: anime.stagger(300), // 300ms delay between letters
      });
  }, []);


  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="dim"></div>
      <img src={lp} className="bgIMG"></img>
      <div className="landingPageContent">
      <svg viewBox="0 0 1200 300" className="animated-text">
          <text x="50%" y="50%" font-size="120" dominant-baseline="middle" text-anchor="middle">
            <tspan class="white">W</tspan>
            <tspan class="white">e</tspan>
            <tspan class="white">l</tspan>
            <tspan class="white">c</tspan>
            <tspan class="white">o</tspan>
            <tspan class="white">m</tspan>
            <tspan class="white">e</tspan>
            <tspan dx="20" class="white">t</tspan>
            <tspan class="white">o</tspan>
            <tspan dx="20" class="green">A</tspan>
            <tspan class="green">r</tspan>
            <tspan class="green">t</tspan>
            <tspan dx="20" class="green">A</tspan>
            <tspan class="green">r</tspan>
            <tspan class="green">e</tspan>
            <tspan class="green">n</tspan>
            <tspan class="green">a</tspan>
          </text>
        </svg>


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

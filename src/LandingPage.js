// LandingPage.js
import React, { useEffect, useState } from 'react';
import './css/LandingPage.css';
import lp from '/Users/kobesterzz/Documents/ArtArena/src/img/LP.jpg';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';


function LandingPage() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const words = "Art Arena";
  const typingSpeed = 150;
  const backspaceSpeed = 100;
  const delayAfterTyping = 2000;


  useEffect(() => {
    let index = 0;
    let isTyping = true;
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (isTyping) {
          // Typing characters in
          if (index < words.length) {
            setText(words.slice(0, index + 1));
            index++;
          } else {
            // Typing complete, clear interval and set a delay before backspacing
            clearInterval(typingInterval);
            setTimeout(() => {
              isTyping = false;
              startTyping(); // Restart interval for backspacing
            }, delayAfterTyping);
          }
        } else {
          // Backspacing characters out
          if (index > 0) {
            setText(words.slice(0, index - 1));
            index--;
          } else {
            // Backspacing complete, switch to typing mode and restart
            isTyping = true;
          }
        }
      }, isTyping ? typingSpeed : backspaceSpeed);
    };

    startTyping(); // Start the typing effect

    return () => clearInterval(typingInterval); // Clear interval on component unmount
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
            <tspan className="white">Welcome to </tspan>
          </text>
        </svg>
        <span className="typing-text">{text}</span>
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

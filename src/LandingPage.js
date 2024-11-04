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

      <div className="bg-container">
        <img src={lp} className="bgIMG" alt="Background" />

        {/* Flex container to align "Welcome to" and typing text */}
        <div className="text-container">
          <span className="static-text">Welcome to</span>
          <span className="typing-text">{text}</span>
        </div>
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

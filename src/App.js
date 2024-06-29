import React, { useState } from 'react';
import './App.css';
import SideBar from './sidebar';
import Modal from './MoreModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`Home ${isDarkMode ? 'dark-mode' : ''}`}>
      <SideBar openModal={openModal} />
      {showModal && <Modal onClose={closeModal} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />}
    </div>
  );
}


export default App;
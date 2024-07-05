import React, { useState } from 'react';
import './App.css';
import SideBar from './sidebar';
import Modal from './MoreModal';
import Feed from './Feed';
import SearchBar from './SearchBar';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);

  return (
    <div className={`Home ${isDarkMode ? 'dark-mode' : ''}`}>
      <SideBar openModal={openModal} openSearch={openSearch}/>
      {showSearch && <SearchBar closeSearch={closeSearch} />}
      <div className="main-content">
        <Feed />
      </div>
      {showModal && (
        <Modal
          onClose={closeModal}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );

}


export default App;
import React, { useState } from 'react';
import './App.css';
import SideBar from './sidebar';
import Modal from './MoreModal';
import Feed from './Feed';
import SearchBar from './SearchBar';
import MessagingPage from './Messaging page/MessagingPage';



function App() {
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const openModal = () => { setShowModal(true); };
  const closeModal = () => { setShowModal(false); };
  const toggleDarkMode = () => { setIsDarkMode(!isDarkMode); };
  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);
  const navigateToPage = (page) => setCurrentPage(page);

  return (
    <div className={`Home ${isDarkMode ? 'dark-mode' : ''}`}>
      <SideBar openModal={openModal} openSearch={openSearch} navigateToPage={navigateToPage}/>
      {showSearch && <SearchBar closeSearch={closeSearch} />}
      <div className="main-content">
      {currentPage === 'home' && <Feed />}
      {currentPage === 'messages' && <MessagingPage />}
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
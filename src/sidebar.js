// SideBar.js
// SideBar.js
import React, { useState } from 'react';
import './css/sidebar.css';
import {
  FaUser,
  FaTrophy,
  FaHome,
  FaBell,
  FaCog,
  FaSearch,
  FaPaperPlane,
  FaPlus,
  FaCompass,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import SearchBar from './SearchBar';
import NotificationBar from './NotificationBar';

function SideBar({ openModal, navigateToPage }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // To control hamburger menu visibility

  const [notifications] = useState(['Notification 1', 'Notification 2', 'Notification 3']);

  const openSearch = () => {
    setIsSearchActive(true);
    setIsNotificationActive(false);
  };

  const closeSearch = () => setIsSearchActive(false);

  const openNotificationBar = () => {
    setIsNotificationActive(true);
    setIsSearchActive(false);
  };

  const closeNotificationBar = () => setIsNotificationActive(false);

  const handleIconClick = (page) => {
    navigateToPage(page);
    setIsSidebarOpen(false); // Close the hamburger menu on click
    closeSearch();
    closeNotificationBar();
  };

  return (
    <>
      {/* Hamburger menu button (only visible on small screens) */}
      <div className="hamburger-menu">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hamburger-btn">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <a onClick={() => handleIconClick('home')}>
            <h1 id="sidebarTitle">ArtArena</h1>
          </a>
        </div>
        {isSearchActive && <SearchBar closeSearch={closeSearch} />}
        {isNotificationActive && <NotificationBar notifications={notifications} closeNotificationBar={closeNotificationBar} />}
        
        <div className="sidebar-menu">
          <a className="sidebar-item" onClick={() => handleIconClick('home')}>
            <FaHome className="sidebar-icon" /> Home
          </a>
          <a className="sidebar-item" onClick={openSearch}>
            <FaSearch className="sidebar-icon" /> Search
          </a>
          <a className="sidebar-item" onClick={() => handleIconClick('explore')}>
            <FaCompass className="sidebar-icon" /> Explore
          </a>
          <a className="sidebar-item" onClick={() => handleIconClick('messages')}>
            <FaPaperPlane className="sidebar-icon" /> Messages
          </a>
          <a className="sidebar-item" onClick={openNotificationBar}>
            <FaBell className="sidebar-icon" /> Notifications
          </a>
          <a className="sidebar-item" onClick={() => handleIconClick('tournaments')}>
            <FaTrophy className="sidebar-icon" /> Tournaments
          </a>
          <a className="sidebar-item" onClick={() => handleIconClick('create')}>
            <FaPlus className="sidebar-icon" /> Create
          </a>
          <a className="sidebar-item" onClick={() => handleIconClick('settings')}>
            <FaCog className="sidebar-icon" /> Settings
          </a>
        </div>

        <div className="sidebar-footer">
          <a className="sidebar-item" onClick={() => handleIconClick('profile')}>
            <FaUser className="sidebar-icon" /> Profile
          </a>
        </div>
      </div>
    </>
  );
}

export default SideBar;

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
} from 'react-icons/fa';
import SearchBar from './SearchBar';
import NotificationBar from './NotificationBar';

function SideBar({ openModal, navigateToPage }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const [notifications] = useState(['Notification 1', 'Notification 2', 'Notification 3']); // Sample notifications

  const openSearch = () => {
    setIsSearchActive(true);
  };

  const closeSearch = () => {
    setIsSearchActive(false);
  };

  const openNotificationBar = () => {
    setIsNotificationActive(true);
  };

  const closeNotificationBar = () => {
    setIsNotificationActive(false);
  };

  const handleIconClick = (page) => {
    navigateToPage(page);
    closeSearch(); // Close the search bar when any other icon is clicked
    closeNotificationBar(); // Close the notification bar when any other icon is clicked
  };

  return (
    <div className={`sidebar ${isSearchActive || isNotificationActive ? 'sidebar-expanded' : ''}`}>
      <div className="sidebar-header">
        <a onClick={() => handleIconClick('home')}>
          <h1 className={`sidebar-item ${isSearchActive || isNotificationActive ? 'hide-text' : ''}`} id="sidebarTitle">ArtArena</h1>
        </a>
      </div>
      {isSearchActive && <SearchBar closeSearch={closeSearch} />}
      {isNotificationActive && <NotificationBar notifications={notifications} closeNotificationBar={closeNotificationBar} />}
      <div className={`sidebar-menu ${isSearchActive || isNotificationActive ? 'hide-text' : ''}`}>
        <a href="#home" className={`sidebar-item ${isSearchActive || isNotificationActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('home')}>
          <FaHome className={`sidebar-icon ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && !isNotificationActive && 'Home'}
        </a>
        <a href="#search" className={`sidebar-item ${isSearchActive || isNotificationActive ? 'sidebar-icon-only' : ''}`} onClick={openSearch}>
          <FaSearch className={`sidebar-icon ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && !isNotificationActive && 'Search'}
        </a>
        <a href="#explore" className={`sidebar-item ${isSearchActive || isNotificationActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('explore')}>
          <FaCompass className={`sidebar-icon ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && !isNotificationActive && 'Explore'}
        </a>
        <a href="#messages" className={`sidebar-item ${isSearchActive || isNotificationActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('messages')}>
          <FaPaperPlane className={`sidebar-icon ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && !isNotificationActive && 'Messages'}
        </a>
        <a href="#notifications" className={`sidebar-item ${isSearchActive || isNotificationActive ? 'sidebar-icon-only' : ''}`} onClick={openNotificationBar}>
          <FaBell className={`sidebar-icon ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && !isNotificationActive && 'Notifications'}
        </a>
        <a href="#tournaments" className={`sidebar-item ${isSearchActive || isNotificationActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('tournaments')}>
          <FaTrophy className={`sidebar-icon ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && !isNotificationActive && 'Tournaments'}
        </a>
        <a href="#create" className={`sidebar-item ${isSearchActive || isNotificationActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('create')}>
          <FaPlus className={`sidebar-icon ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && !isNotificationActive && 'Create'}
        </a>
        <a href="#settings" className={`sidebar-item ${isSearchActive || isNotificationActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('settings')}>
          <FaCog className={`sidebar-icon ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && !isNotificationActive && 'Settings'}
        </a>
      </div>
      <div className={`sidebar-footer ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`}>
        <a href="#profile" className={`sidebar-item ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`} onClick={() => handleIconClick('profile')}>
          <FaUser className={`sidebar-icon ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''} `} /> Profile
        </a>
        <a href="#more" className={`sidebar-item ${isSearchActive || isNotificationActive ? 'sidebar-icon-only' : ''}`} onClick={() => { handleIconClick('more'); openModal(); }}>
          <FaBars className={`sidebar-icon ${isSearchActive || isNotificationActive ? 'icon-hover-only' : ''}`} /> More
        </a>
      </div>
    </div>
  );
}

export default SideBar;

import React, { useState } from 'react';
import './sidebar.css';
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
import SearchBar from './SearchBar'; // Import SearchBar component

function SideBar({ openModal, navigateToPage }) {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const openSearch = () => {
    setIsSearchActive(true);
  };

  const closeSearch = () => {
    setIsSearchActive(false);
  };

  const handleIconClick = (page) => {
    navigateToPage(page);
    closeSearch(); // Close the search bar when any other icon is clicked
  };

  return (
    <div className={`sidebar ${isSearchActive ? 'sidebar-expanded' : ''}`}>
      <div className="sidebar-header">
        <a onClick={() => handleIconClick('home')}>
          <h1 className={`sidebar-item ${isSearchActive ? 'hide-text'  : ''}`}>ArtArena</h1>
        </a>
      </div>
      {isSearchActive && <SearchBar closeSearch={closeSearch} />}
      <div className={`sidebar-menu ${isSearchActive ? 'hide-text' : ''}`}>
        <a href="#home" className={`sidebar-item ${isSearchActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('home')}>
          <FaHome className={`sidebar-icon ${isSearchActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && 'Home'}
        </a>
        <a href="#search" className={`sidebar-item ${isSearchActive ? 'sidebar-icon-only' : ''}`} onClick={openSearch}>
          <FaSearch className={`sidebar-icon ${isSearchActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && 'Search'}
        </a>
        <a href="#explore" className={`sidebar-item ${isSearchActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('explore')}>
          <FaCompass className={`sidebar-icon ${isSearchActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && 'Explore'}
        </a>
        <a href="#messages" className={`sidebar-item ${isSearchActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('messages')}>
          <FaPaperPlane className={`sidebar-icon ${isSearchActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && 'Messages'}
        </a>
        <a href="#tournaments" className={`sidebar-item ${isSearchActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('tournaments')}>
          <FaTrophy className={`sidebar-icon ${isSearchActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && 'Tournaments'}
        </a>
        <a href="#notifications" className={`sidebar-item ${isSearchActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('notifications')}>
          <FaBell className={`sidebar-icon ${isSearchActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && 'Notifications'}
        </a>
        <a href="#create" className={`sidebar-item ${isSearchActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('create')}>
          <FaPlus className={`sidebar-icon ${isSearchActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && 'Create'}
        </a>
        <a href="#settings" className={`sidebar-item ${isSearchActive ? 'sidebar-icon-only' : ''}`} onClick={() => handleIconClick('settings')}>
          <FaCog className={`sidebar-icon ${isSearchActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && 'Settings'}
        </a>
      </div>
      <div className={`sidebar-footer ${isSearchActive ? 'icon-hover-only' : ''}`}>
        <a href="#profile" className={`sidebar-item ${isSearchActive ? 'icon-hover-only' : ''}`} onClick={() => handleIconClick('profile')}>
          <FaUser className={`sidebar-icon ${isSearchActive ? 'icon-hover-only' : ''} `} /> {!isSearchActive && 'Profile'}
        </a>
        <a href="#more" className={`sidebar-item ${isSearchActive ? 'sidebar-icon-only' : ''}`} onClick={() => { handleIconClick('more'); openModal(); }}>
          <FaBars className={`sidebar-icon ${isSearchActive ? 'icon-hover-only' : ''}`} /> {!isSearchActive && 'More'}
        </a>
      </div>
    </div>
  );
}



export default SideBar;
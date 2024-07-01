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
import Modal from './MoreModal';

function SideBar({ openModal }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-item">ArtArena</h1>
      </div>
      <div className="sidebar-menu">
        <a href="#home" className="sidebar-item">
          <FaHome className="sidebar-icon" /> Home
        </a>
        <a href="#search" className="sidebar-item">
          <FaSearch className="sidebar-icon" /> Search
        </a>
        <a href="#explore" className="sidebar-item">
          <FaCompass className="sidebar-icon" /> Explore
        </a>
        <a href="#messages" className="sidebar-item">
          <FaPaperPlane className="sidebar-icon" /> Messages
        </a>
        <a href="#tournaments" className="sidebar-item">
          <FaTrophy className="sidebar-icon" /> Tournaments
        </a>
        <a href="#notifications" className="sidebar-item">
          <FaBell className="sidebar-icon" /> Notifications
        </a>
        <a href="#create" className="sidebar-item">
          <FaPlus className="sidebar-icon" /> Create
        </a>
        <a href="#settings" className="sidebar-item">
          <FaCog className="sidebar-icon" /> Settings
        </a>
      </div>
      <div className="sidebar-footer">
        <a href="#profile" className="sidebar-item">
          <FaUser className="sidebar-icon" /> Profile
        </a>
        <a href="#more" className="sidebar-item" onClick={openModal}>
          <FaBars className="sidebar-icon" /> More
        </a>
      </div>
    </div>
  );
}

export default SideBar;
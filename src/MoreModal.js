import React from 'react';
import './css/modal.css';
import { useAuth } from './AuthContext';

function Modal({ isOpen ,onClose, toggleDarkMode, isDarkMode }) {
  const { logout } = useAuth();
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>More Options</h2>
        </div>
        <hr/>
        <div className="modal-body">
          <div className="modal-item">
            <span>Dark Mode</span>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {isDarkMode ? 'On' : 'Off'}
            </button>
          </div>
          <hr/>
          <div className="modal-item">
            <button onClick={handleLogout} className="logout-button">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

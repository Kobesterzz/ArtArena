import React from 'react';
import './css/modal.css';

function Modal({ onClose, toggleDarkMode, isDarkMode }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
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
        </div>
      </div>
    </div>
  );
}

export default Modal;
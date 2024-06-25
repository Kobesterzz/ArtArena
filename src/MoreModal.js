import React from 'react';
import './modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal">
        <div className="modal-content">
          <h2>More</h2>
          <p>You can add whatever content you want in the modal here.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
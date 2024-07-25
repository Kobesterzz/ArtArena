// CreateTournamentModal.js
import React from 'react';
import './css/CreateTournamentModal.css';

function CreateTournamentModal({ isOpen, onClose, newTournament, handleInputChange, handleImageChange, handleSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Create Tournament</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:
            <input
              type="text"
              name="name"
              value={newTournament.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>Dates:
            <input
              type="text"
              name="dates"
              value={newTournament.dates}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>Description:
            <textarea
              name="description"
              value={newTournament.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>Image:
            <input
              type="file"
              onChange={handleImageChange}
              required
            />
          </label>
          <label>Participants:
            <input
              type="text"
              name="participants"
              value={newTournament.participants}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>Entry Requirements:
            <input
              type="text"
              name="entryRequirements"
              value={newTournament.entryRequirements}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Create Tournament</button>
        </form>
      </div>
    </div>
  );
}

export default CreateTournamentModal;
import React, { useState } from 'react';
import './css/TournamentPage.css';
import CreateTournamentModal from './CreateTournamentModal';

function TournamentPage() {
  const [tournaments, setTournaments] = useState([]);
  const [newTournament, setNewTournament] = useState({
    name: '',
    dates: '',
    description: '',
    image: '',
    participants: '',
    entryRequirements: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTournament({ ...newTournament, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewTournament({ ...newTournament, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTournaments([...tournaments, newTournament]);
    setNewTournament({
      name: '',
      dates: '',
      description: '',
      image: '',
      participants: '',
      entryRequirements: ''
    });
    setIsModalOpen(false); // Close the modal after submitting
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="tournament-page">
      <header>
        <h1>Tournaments</h1>
      </header>

      <button className="create-tournament-button" onClick={openModal}>Create Tournament</button>
      <CreateTournamentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        newTournament={newTournament}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
      />

      <section className="tournament-list">
        <h2>Ongoing/Upcoming Tournaments</h2>
        {tournaments.map((tournament, index) => (
          <div key={index} className="tournament">
            <img src={tournament.image} alt={tournament.name} />
            <h3>{tournament.name}</h3>
            <p>{tournament.dates}</p>
            <p>{tournament.description}</p>
            <p>Participants: {tournament.participants}</p>
            <button>Join</button>
          </div>
        ))}
      </section>

    </div>
  );
}

export default TournamentPage;

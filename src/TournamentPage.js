import React, { useState } from 'react';
import './css/TournamentPage.css';
import CreateTournamentModal from './CreateTournamentModal';

function TournamentPage() {
  const [yourTournaments, setYourTournaments] = useState([]);
  const [ongoingTournaments, setOngoingTournaments] = useState([
    {
      name: 'Landscape Painting Contest',
      dates: 'July 1 - July 15, 2024',
      description: 'Showcase your best landscape paintings.',
      image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg',
      participants: '50',
      entryRequirements: 'experts only'
    },
    {
      name: 'Abstract Art Challenge',
      dates: 'August 1 - August 20, 2024',
      description: 'Create and submit your most imaginative abstract art pieces.',
      image: 'https://www.aiscribbles.com/img/variant/large-preview/52086/?v=9b9754',
      participants: '30',
      entryRequirements: 'Open to all skill levels'
    },
    {
      name: 'Portrait Drawing Competition',
      dates: 'September 1 - September 15, 2024',
      description: 'Submit your best portrait drawings.',
      image: 'https://skyryedesign.com/wp-content/uploads/2024/06/4222193391251403-pin-image-729x1024.jpg',
      participants: '20',
      entryRequirements: 'Open to all skill levels'
    }
  ]);
  const [newTournament, setNewTournament] = useState({
    name: '',
    dates: '',
    description: '',
    image: '',
    participants: '',
    entryRequirements: '',
    marker: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTournament({ ...newTournament, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewTournament({ ...newTournament, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createdTournament = { ...newTournament, marker: 'creator' };
    
    setYourTournaments([...yourTournaments, createdTournament]);
    setNewTournament({
      name: '',
      dates: '',
      description: '',
      image: '',
      participants: '',
      entryRequirements: '',
      marker: ''
    });
    setIsModalOpen(false); // Close the modal after submitting
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const joinTournament = (index) => {
    const tournamentToJoin = ongoingTournaments[index];
    setYourTournaments([...yourTournaments, { ...tournamentToJoin, marker: 'participant' }]);
    setOngoingTournaments(ongoingTournaments.filter((_, i) => i !== index));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTournaments = ongoingTournaments.filter((tournament) =>
    tournament.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="tournament-page">
      <header>
        <h1>Tournaments</h1>
      </header>

      <div className='pageContent'>
        <div className='TopSection'>
          <button className="create-tournament-button" onClick={openModal}>Create Tournament</button>
          <input
            className='tournamentSearchbar'
            placeholder='Search Tournaments'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <CreateTournamentModal
            isOpen={isModalOpen}
            onClose={closeModal}
            newTournament={newTournament}
            handleInputChange={handleInputChange}
            handleImageChange={handleImageChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <h2>Your Tournaments</h2>
        <section className="tournament-list">
          
          {yourTournaments.map((tournament, index) => (
            <div key={index} className="tournament">
              {tournament.marker === 'participant' && <div className="marker participant-marker">Participant</div>}
              <img src={tournament.image} alt={tournament.name} />
              <h3>{tournament.name}</h3>
              <p>{tournament.dates}</p>
              <p>{tournament.description}</p>
              <p>Participants: {tournament.participants}</p>
            </div>
          ))}
        </section>

        <h2>Ongoing/Upcoming Tournaments</h2>
        <section className="tournament-list">
          
          {filteredTournaments.map((tournament, index) => (
            <div key={index} className="tournament">
              {tournament.marker === 'creator' && <div className="marker creator-marker">Creator</div>}
              <img src={tournament.image} alt={tournament.name} />
              <h3>{tournament.name}</h3>
              <p>{tournament.dates}</p>
              <p>{tournament.description}</p>
              <p>Participants: {tournament.participants}</p>
              <button onClick={() => joinTournament(index)}>Join</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default TournamentPage;
import React, { useState } from 'react';
import './App.css';
import SideBar from './sidebar';
import Modal from './MoreModal';

function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Home">
      <SideBar />
    </div>
  );
}

export default App;

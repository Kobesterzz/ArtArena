import React, { useState } from 'react';
import './css/App.css';
import SideBar from './sidebar';
import Modal from './MoreModal';
import Feed from './Feed';
import SearchBar from './SearchBar';
import MessagingPage from './Messaging page/MessagingPage';
import CreatePost from './CreatePost';
import TournamentPage from './TournamentPage';
import NotificationBar from './NotificationBar';
import ExplorePage from './ExplorePage';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotificationBar, setShowNotificationBar] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'artist1',
      imageUrl: 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60', // Art Image 1
      description: 'Beautiful sunset painting',
    },
    {
      id: 2,
      username: 'artist2',
      imageUrl: 'https://images.unsplash.com/photo-1554136123-1a636c2a37aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60', // Art Image 2
      description: 'Abstract art',
    },
    {
      id: 3,
      username: 'artist3',
      imageUrl: 'https://images.unsplash.com/photo-1532635248-3dace48c5c8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60', // Art Image 3
      description: 'Landscape painting',
    },
    {
      id: 4,
      username: 'artist4',
      imageUrl: 'https://images.unsplash.com/photo-1551802885-92cf33f57e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60', // Art Image 4
      description: 'Portrait drawing',
    },
    {
      id: 5,
      username: 'artist5',
      imageUrl: 'https://images.unsplash.com/photo-1533142266415-6c043b0650d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60', // Art Image 5
      description: 'Modern sculpture',
    },
  ]);
  
  const openModal = () => { setShowModal(true); };
  const closeModal = () => { setShowModal(false); };
  const toggleDarkMode = () => { setIsDarkMode(!isDarkMode); };
  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);
  const openNotificationBar = () => setShowNotificationBar(true);
  const closeNotificationBar = () => setShowNotificationBar(false);
  const navigateToPage = (page) => setCurrentPage(page);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className={`Home ${isDarkMode ? 'dark-mode' : ''}`}>
      <SideBar
        openModal={openModal}
        openSearch={openSearch}
        openNotificationBar={openNotificationBar}
        navigateToPage={navigateToPage}
      />
      {showSearch && <SearchBar closeSearch={closeSearch} />}
      {showNotificationBar && <NotificationBar closeNotificationBar={closeNotificationBar} />}
      <div className="main-content">
        {currentPage === 'home' && <Feed posts={posts} />}
        {currentPage === 'messages' && <MessagingPage />}
        {currentPage === 'create' && <CreatePost addPost={addPost} />}
        {currentPage === 'tournaments' && <TournamentPage />}
        {currentPage === 'explore' && <ExplorePage posts={posts} />} 
      </div>
      {showModal && (
        <Modal
          onClose={closeModal}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}

export default App;

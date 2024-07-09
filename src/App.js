import React, { useState } from 'react';
import './App.css';
import SideBar from './sidebar';
import Modal from './MoreModal';
import Feed from './Feed';
import SearchBar from './SearchBar';
import MessagingPage from './Messaging page/MessagingPage';
import CreatePost from './CreatePost';



function App() {
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'artist1',
      imageUrl: 'https://via.placeholder.com/600',
      description: 'Beautiful sunset painting',
    },
    {
      id: 2,
      username: 'artist2',
      imageUrl: 'https://via.placeholder.com/600',
      description: 'Abstract art',
    },
    // Add more placeholder posts here
  ]);

  const openModal = () => { setShowModal(true); };
  const closeModal = () => { setShowModal(false); };
  const toggleDarkMode = () => { setIsDarkMode(!isDarkMode); };
  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);
  const navigateToPage = (page) => setCurrentPage(page);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className={`Home ${isDarkMode ? 'dark-mode' : ''}`}>
      <SideBar openModal={openModal} openSearch={openSearch} navigateToPage={navigateToPage}/>
      {showSearch && <SearchBar closeSearch={closeSearch} />}
      <div className="main-content">
      {currentPage === 'home' && <Feed posts={posts} />}
      {currentPage === 'messages' && <MessagingPage />}
      {currentPage === 'create' && <CreatePost addPost={addPost}/>}
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
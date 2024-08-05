/*
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

export default App; */


import React, { useState } from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import SideBar from './sidebar';
import SearchBar from './SearchBar';
import NotificationBar from './NotificationBar';
import Feed from './Feed';
import MessagingPage from './Messaging page/MessagingPage';
import CreatePost from './CreatePost';
import TournamentPage from './TournamentPage';
import ExplorePage from './ExplorePage';
import LoginForm from './LoginForm';
import CreateAccountForm from './CreateAccountForm';
import Modal from './MoreModal';
import './css/App.css';

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
      imageUrl: 'https://images.unsplash.com/photo-1519923834699-ef0b8abd2261',
      description: 'Beautiful sunset painting',
    },
    {
      id: 2,
      username: 'artist2',
      imageUrl: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931',
      description: 'Abstract art',
    },
    {
      id: 3,
      username: 'artist3',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      description: 'Modern art piece',
    },
    {
      id: 4,
      username: 'artist4',
      imageUrl: 'https://images.unsplash.com/photo-1486591978090-408c64fbd76b',
      description: 'Nature painting',
    },
    {
      id: 5,
      username: 'artist5',
      imageUrl: 'https://images.unsplash.com/photo-1555696958-c50437d591ac',
      description: 'Cityscape art',
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
    <AuthProvider>
      <MainApp
        showModal={showModal}
        setShowModal={setShowModal}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        showNotificationBar={showNotificationBar}
        setShowNotificationBar={setShowNotificationBar}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        posts={posts}
        setPosts={setPosts}
        openModal={openModal}
        closeModal={closeModal}
        toggleDarkMode={toggleDarkMode}
        openSearch={openSearch}
        closeSearch={closeSearch}
        openNotificationBar={openNotificationBar}
        closeNotificationBar={closeNotificationBar}
        navigateToPage={navigateToPage}
        addPost={addPost}
      />
    </AuthProvider>
  );
}

function MainApp(props) {
  const { user } = useAuth();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  return user ? (
    <div className={`Home ${props.isDarkMode ? 'dark-mode' : ''}`}>
      <SideBar
        openModal={props.openModal}
        openSearch={props.openSearch}
        openNotificationBar={props.openNotificationBar}
        navigateToPage={props.navigateToPage}
      />
      {props.showSearch && <SearchBar closeSearch={props.closeSearch} />}
      {props.showNotificationBar && <NotificationBar closeNotificationBar={props.closeNotificationBar} />}
      <div className="main-content">
        {props.currentPage === 'home' && <Feed posts={props.posts} />}
        {props.currentPage === 'messages' && <MessagingPage />}
        {props.currentPage === 'create' && <CreatePost addPost={props.addPost} />}
        {props.currentPage === 'tournaments' && <TournamentPage />}
        {props.currentPage === 'explore' && <ExplorePage posts={props.posts} />} 
      </div>
      {props.showModal && (
        <Modal
          onClose={props.closeModal}
          toggleDarkMode={props.toggleDarkMode}
          isDarkMode={props.isDarkMode}
        />
      )}
    </div>
  ) : (
    isCreatingAccount ? (
      <CreateAccountForm switchToLogin={() => setIsCreatingAccount(false)} />
    ) : (
      <LoginForm switchToCreateAccount={() => setIsCreatingAccount(true)} />
    )
  );
}

export default App;
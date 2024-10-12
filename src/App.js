import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

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
import ProfilePage from './ProfilePage';
import LandingPage from './LandingPage';
import './css/App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotificationBar, setShowNotificationBar] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');
  const [posts, setPosts] = useState([
    {
      id: 1,
      imageUrl: 'https://www.theadvertisingclub.org/wp-content/uploads/2022/10/iStock-1405987908.jpg',
      description: 'A futuristic cityscape in a cyberpunk style, glowing neon blues and purples.',
    },
    {
      id: 2,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg',
      description: 'A surreal digital landscape created in Procreate, blending alien skies with abstract forms.',
    },
    {
      id: 3,
      imageUrl: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/886a1a10-5bb5-4bee-9c0a-f181076b2f45/02abcf1f-1e67-4756-83ab-c2cb5c77ca5e.png',
      description: 'Character concept art for a sci-fi game, featuring a mechanized warrior in a post-apocalyptic world.',
    },
    {
      id: 4,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTz3jlWGwCfNgvu66abv-HKTOn4XIHBXBmz5MQrzUCwxVz5S4z0',
      description: 'A charcoal sketch of a tiger, focusing on the intense expression and movement of the wild animal.',
    },
    {
      id: 5,
      imageUrl: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/ec920802-4866-481f-b6d4-556b2db0e744/d8c1f3d4-5942-4f73-b5cf-f341036e9368.png',
      description: 'Fantasy illustration of a mystical forest, glowing with ethereal light and hidden creatures.',
    },
    {
      id: 6,
      imageUrl: 'https://images.stockcake.com/public/b/4/f/b4f99801-2fee-4237-9606-8307476c7c89/sunset-ocean-waves-stockcake.jpg',
      description: 'A watercolor painting of a sunset over the ocean, capturing vibrant hues and the motion of the waves.',
    },
    {
      id: 7,
      imageUrl: 'https://www.aiscribbles.com/img/variant/large-preview/52086/?v=9b9754',
      description: 'Digital portrait of a woman in abstract cubist style, combining vibrant colors and geometric forms.',
    },
    {
      id: 8,
      imageUrl: 'https://i.ebayimg.com/images/g/GJYAAOSw2gxY1pFj/s-l1200.webp',
      description: 'A still life oil painting of a vase filled with sunflowers, emphasizing texture and light.',
    },
    {
      id: 9,
      imageUrl: 'https://image.cdn2.seaart.ai/2024-03-26/co18qede878c73b8mk10/7d5960a142c931207026a2b22567a6763073b80c_high.webp',
      description: 'Sci-fi scene featuring a spaceship flying over a distant alien planet, created in Photoshop.',
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
    /*
    <AuthProvider>
      {currentPage === 'landing' && <LandingPage navigateToPage={setCurrentPage} />}
      {currentPage === 'profile' && (
        <ProfilePage posts={posts} navigateToPage={setCurrentPage} />
      )}
      {currentPage === 'create' && <CreatePost addPost={addPost} navigateToPage={setCurrentPage} />}
      {currentPage !== 'landing' && currentPage !== 'profile' && (
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
      )}
    </AuthProvider>*/

    <Router>
    <AuthProvider>
      <Routes>
        {/* Routes available when not logged in */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<CreateAccountForm />} />

        {/* Protected routes, only available when logged in */}
        <Route path="/home" element={<MainApp posts={posts} addPost={addPost} />} />
        <Route path="/profile" element={<ProfilePage posts={posts} />} />
        <Route path="/create" element={<CreatePost addPost={addPost} />} />
        <Route path="/tournaments" element={<TournamentPage />} />
      </Routes>
    </AuthProvider>
  </Router>
  );
}

function MainApp({ posts, addPost }) {
  const { user } = useAuth();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  return user ? (
    /*
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
          navigateToPage={props.navigateToPage}
        />
      )}
    </div>
  ) : (
    isCreatingAccount ? (
      <CreateAccountForm switchToLogin={() => setIsCreatingAccount(false)} />
    ) : (
      <LoginForm switchToCreateAccount={() => setIsCreatingAccount(true)} />
    )
    */
      <div className="Home">
      <SideBar />
      <div className="main-content">
        <Feed posts={posts} />
      </div>
    </div>
  ) : (
    <LandingPage />

  );

}

export default App;

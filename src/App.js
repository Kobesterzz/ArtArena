import React, { useEffect, useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState('home');
  const initialPosts = [
    {
      id: 1,
      pfp: 'https://img.freepik.com/premium-photo/futuristic-cyberpunk-illustration-neon-city-background-silhouette-man-background-city-background-shining-metropolis_493343-36357.jpg',
      username: 'NeonNomad',
      imageUrl: 'https://www.theadvertisingclub.org/wp-content/uploads/2022/10/iStock-1405987908.jpg',
      description: 'A futuristic cityscape in a cyberpunk style, glowing neon blues and purples.',
    },
    {
      id: 2,
      pfp: 'https://img.freepik.com/premium-photo/serene-forest-glowing-with-golden-fireflies-summer-night_926271-4677.jpg',
      username: 'ForestFlicker',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg',
      description: 'A surreal digital landscape created in Procreate, blending alien skies with abstract forms.',
    },
    {
      id: 3,
      pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLb-1QjTCxUanoNjrTFAhpuJEvID-aym2DEg&s',
      username: 'MechaMaster',
      imageUrl: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/886a1a10-5bb5-4bee-9c0a-f181076b2f45/02abcf1f-1e67-4756-83ab-c2cb5c77ca5e.png',
      description: 'Character concept art for a sci-fi game, featuring a mechanized warrior in a post-apocalyptic world.',
    },
    {
      id: 4,
      pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fe_gDupUPinE-EauQUz1jhGRSg3g1Jm5xQ&s',
      username: 'SketchSavage',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTz3jlWGwCfNgvu66abv-HKTOn4XIHBXBmz5MQrzUCwxVz5S4z0',
      description: 'A charcoal sketch of a tiger, focusing on the intense expression and movement of the wild animal.',
    },
    {
      id: 5,
      pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NiHOwPH3tn1XFf03ur0xjaLThZDIEONsvg&s',
      username: 'MysticMoss',
      imageUrl: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/ec920802-4866-481f-b6d4-556b2db0e744/d8c1f3d4-5942-4f73-b5cf-f341036e9368.png',
      description: 'Fantasy illustration of a mystical forest, glowing with ethereal light and hidden creatures.',
    },
    {
      id: 6,
      pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rlwJp7fNH9t_BGfZiN3yVuancywTYDgQVw&s',
      username: 'SunsetSeeker',
      imageUrl: 'https://images.stockcake.com/public/b/4/f/b4f99801-2fee-4237-9606-8307476c7c89/sunset-ocean-waves-stockcake.jpg',
      description: 'A watercolor painting of a sunset over the ocean, capturing vibrant hues and the motion of the waves.',
    },
    {
      id: 7,
      pfp: 'https://creator.nightcafe.studio/jobs/2RYccQ6RmFs3U2HRCA3O/2RYccQ6RmFs3U2HRCA3O--1--o51wg.jpg',
      username: 'CubistChroma',
      imageUrl: 'https://www.aiscribbles.com/img/variant/large-preview/52086/?v=9b9754',
      description: 'Digital portrait of a woman in abstract cubist style, combining vibrant colors and geometric forms.',
    },
    {
      id: 8,
      pfp: 'https://www.wholeblossoms.com/wedding-flowers-blog/wp-content/uploads/2024/03/IMG_1395-min-940x940.png',
      username: 'VividVase',
      imageUrl: 'https://i.ebayimg.com/images/g/GJYAAOSw2gxY1pFj/s-l1200.webp',
      description: 'A still life oil painting of a vase filled with sunflowers, emphasizing texture and light.',
    },
    {
      id: 9,
      pfp: 'https://img.freepik.com/premium-photo/astronaut-walks-his-space-suit-distant-planet-outer-space_899263-9075.jpg?w=360',
      username: 'CosmicVoyager',
      imageUrl: 'https://image.cdn2.seaart.ai/2024-03-26/co18qede878c73b8mk10/7d5960a142c931207026a2b22567a6763073b80c_high.webp',
      description: 'Sci-fi scene featuring a spaceship flying over a distant alien planet, created in Photoshop.',
    },
  ];


  //randomize the post
    const shuffledPosts = (array) => { 
      return [...array].sort(() => Math.random() - .5);
    }

  // Shuffle posts only once on initial load
  const [posts, setPosts] = useState(shuffledPosts(initialPosts));

  const openModal = () => { setShowModal(true); };
  const closeModal = () => { setShowModal(false); };
  const toggleDarkMode = () => { setIsDarkMode(!isDarkMode); };
  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);
  const openNotificationBar = () => setShowNotificationBar(true);
  const closeNotificationBar = () => setShowNotificationBar(false);
  const navigateToPage = (page) => setCurrentPage(page);

  const addPost = (newPost) => setPosts((prevPosts) => [newPost, ...prevPosts]);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/createAccount" element={<CreateAccountForm />} />
          <Route path="/home" element={<MainApp
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
          />} />
        </Routes>
      </Router>
    </AuthProvider>

  
  );
}

function MainApp(props) {
  const { user } = useAuth();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const navigateToPage = (page) => {
    console.log(`Navigating to: ${page}`);
    // Navigation logic: Example with React Router's navigate() or window.location
    // Example: window.location.href = `/${page}`;
  };

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
        {props.currentPage === 'tournaments' && <TournamentPage />}
        {props.currentPage === 'explore' && <ExplorePage posts={props.posts} />} 
        {props.currentPage === 'profile' && <ProfilePage navigateToPage={props.navigateToPage} />} 
        {props.currentPage === 'create' && <CreatePost addPost={props.addPost} />}
      </div>
      {props.showModal && (
        <Modal
          onClose={props.closeModal}
          toggleDarkMode={props.toggleDarkMode}
          isDarkMode={props.isDarkMode}
          navigateToPage={props.navigateToPage} // Pass navigateToPage to Modal
        />
      )}
    </div>
  ) : (
    <LandingPage navigateToPage={navigateToPage}/>
  );
}

export default App;
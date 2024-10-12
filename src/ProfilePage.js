import React from 'react';
import { useAuth } from './AuthContext';
import SideBar from './sidebar';
import './css/ProfilePage.css';

function ProfilePage({ navigateToPage, posts = [] }) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigateToPage('landing');
  };

  // Filter posts to show only those created by the logged-in user
  const userPosts = posts.filter(post => post.username === user.username);


  return (
    <div className="profile-page">
      <SideBar
        openModal={() => {}}
        openSearch={() => {}}
        openNotificationBar={() => {}}
        navigateToPage={navigateToPage}
      />
      <div className="profile-wrapper">
        {/* Profile card on the top left */}
        <div className="profile-card">
          <img
            src={user.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="profile-picture"
          />
          <h2>{user.username}</h2>
          <div className="profile-stats">
            <div className="profile-stat">
              <strong>{userPosts.length}</strong>
              <span>Posts</span>
            </div>
            <div className="profile-stat">
              <strong>{user.followersCount}</strong>
              <span>Followers</span>
            </div>
            <div className="profile-stat">
              <strong>{user.followingCount}</strong>
              <span>Following</span>
            </div>
          </div>
          <p>Email: {user.email}</p>
          <p>Joined: {new Date(user.joinedDate).toLocaleDateString()}</p>
          <button onClick={handleLogout} className="logout-button">Log Out</button>
        </div>

        {/* Feed section for the user's posts */}
        <div className="feed-container">
          <h3>Your Posts</h3>
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <div key={post.id} className="feed-item">
                <img src={post.imageUrl} alt={post.description} />
                <p>{post.description}</p>
              </div>
            ))
          ) : (
            <p>No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

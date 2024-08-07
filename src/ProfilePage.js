import React from 'react';
import { useAuth } from './AuthContext';
import './css/ProfilePage.css';

function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img src={user.profilePicture || 'https://via.placeholder.com/150'} alt="Profile" className="profile-picture" />
        <h2>{user.username}</h2>
        <div className="profile-stats">
          <div className="profile-stat">
            <strong>{user.postsCount}</strong>
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
        <button onClick={logout} className="logout-button">Log Out</button>
      </div>
    </div>
  );
}

export default ProfilePage;

import React from 'react';
import './Feed.css';
import { FaRegHeart, FaRegComment, FaRegShareSquare } from 'react-icons/fa';



function Feed() {
  // Placeholder data for posts
  const posts = [
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
  ];

  return (
    <div className="feed">
    {posts.map((post) => (
      <div key={post.id} className="post">
        <div className="post-header">
          <h3>{post.username}</h3>
        </div>
        <img src={post.imageUrl} alt={post.description} className="post-image" />
        <div className="post-actions">
          <a><FaRegHeart /></a>
          <a><FaRegComment /></a>
          <a><FaRegShareSquare /></a>
        </div>
        <div className="post-description">
          <p>{post.description}</p>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Feed;
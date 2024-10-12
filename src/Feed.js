import React from 'react';
import './css/Feed.css';
import { FaRegHeart, FaRegComment, FaRegShareSquare } from 'react-icons/fa';



function Feed({ posts=[] }) {
  return (
    <div className="feed">
      <div>
        Home
        <hr></hr>
      </div>
      
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <h3>{posts.username || 'Anonymous'}</h3>
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
import React from 'react';
import './css/Feed.css';
import { FaRegHeart, FaRegComment, FaRegShareSquare } from 'react-icons/fa';



function Feed({ posts=[] }) {
  return (
    <div className="feed">
      <div class="feedHeader">
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
            <a><FaRegHeart className="custom-icon"/></a>
            <a><FaRegComment className="custom-icon"/></a>
            <a><FaRegShareSquare className="custom-icon"/></a>
          </div>
          <div className="post-description">
            <p>{post.description}</p>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}




export default Feed;
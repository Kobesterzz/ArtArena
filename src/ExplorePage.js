import React from 'react';
import './css/ExplorePage.css';

function ExplorePage({ posts }) {
  return (
    <div className="explore-page">
      <header>
        <h1>Explore</h1>
      </header>
      <div className="explore-grid">
        {posts.map((post) => (
          <div key={post.id} className="explore-item">
            <img src={post.imageUrl} alt={post.description} />
            <div className="explore-overlay">
              <h3>{post.username}</h3>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;

import React from 'react';
import './css/ExplorePage.css';

function ExplorePage({ posts }) {
  // Group posts into sets of three (1 tall + 2 stacked)
  const groupedPosts = [];
  for (let i = 0; i < posts.length; i += 3) {
    groupedPosts.push(posts.slice(i, i + 3));
  }

  return (
    <div className="explore-page">
      <header>
        <h1>Explore</h1>
      </header>
      <div className="explore-grid">
        {groupedPosts.map((group, index) => (
          <div
            key={index}
            className={`explore-row ${index % 2 === 0 ? 'normal' : 'reversed'}`}
          >
            {/* Single Tall Post */}
            <div className="explore-column explore-item">
              {group[0] && (
                <>
                  <img src={group[0].imageUrl} alt={group[0].description} />
                  <div className="explore-overlay">
                    <h3>{group[0].username}</h3>
                    <p>{group[0].description}</p>
                  </div>
                </>
              )}
            </div>

            {/* Two Stacked Posts */}
            <div className="explore-column explore-stacked">
              {group.slice(1).map((post) => (
                <div key={post.id} className="stacked-item explore-item">
                  <img src={post.imageUrl} alt={post.description} />
                  <div className="explore-overlay">
                    <h3>{post.username}</h3>
                    <p>{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;
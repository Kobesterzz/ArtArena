import React from 'react';
import './css/ExplorePage.css';

function ExplorePage({ posts }) {
  // Group posts into chunks of three (one tall, two stacked)
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
          <div key={index} className="explore-row">
            {/* First post in the group goes to the tall column */}
            <div className="column-tall explore-item">
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

            {/* Next two posts stack on top of each other */}
            <div className="column-stacked">
              {group.slice(1).map((post) => (
                <div key={post.id} className="explore-item stacked">
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

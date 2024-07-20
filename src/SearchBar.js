import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ closeSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="inputBox">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={closeSearch} className="close-btn">X</button>
      </div>
      
      <div className="search-results">
        {/* Render search results here based on searchTerm */}
        <p>Results for "{searchTerm}"</p>
      </div>
    </div>
  );
}

export default SearchBar;

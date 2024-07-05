import React from 'react';
import './SearchBar.css';

function SearchBar({ closeSearch }) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button onClick={closeSearch} className="close-btn">X</button>
    </div>
  );
}

export default SearchBar;

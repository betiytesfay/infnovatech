import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-section ">
      <div className="search-bar-course">
        <input
          type="text"
          placeholder="Search Courses..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="search-bar-instructor">
        <input
          type="text"
          placeholder="search Instructors..."
          value={searchTerm}
          onChange={handleChange}
        />
        <div>
          <input
            type="text"
            placeholder="search Instructors..."
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <span className="search-icon">🔍</span>
      </div>


    </div>
  );
};

export default SearchBar;
import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch, onCategoryChange, onLevelChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onCategoryChange(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
    onLevelChange(e.target.value);
  };

  return (
    <div className="filters-container  ">
      {/* Box 1: Search Input */}
      <div className="filter-box search-box">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span className="search-icon">🔍</span>
      </div>

      {/* Box 2: Category Dropdown */}
      <div className="filter-box dropdown-box">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          <option value="">All Categories</option>
          <option value="WEB DEVELOPMENT">Web Development</option>
          <option value="DATA SCIENCE">Data Science</option>
          <option value="DESIGN">Design</option>
          <option value="CLOUD ENGINEERING">Cloud Engineering</option>
          <option value="DATA ANALYTICS">Data Analytics</option>
          <option value="BLOCKCHAIN">Blockchain</option>
          <option value="DEVOPS">DevOps</option>
          <option value="CYBERSECURITY">Cybersecurity</option>
        </select>
        <span className="dropdown-arrow">▼</span>
      </div>

      {/* Box 3: Level Dropdown */}
      <div className="filter-box dropdown-box">
        <select
          value={level}
          onChange={handleLevelChange}
          className="filter-select"
        >
          <option value="">All Levels</option>
          <option value="BEGINNER">Beginner</option>
          <option value="INTERMEDIATE">Intermediate</option>
          <option value="ADVANCED">Advanced</option>
        </select>
        <span className="dropdown-arrow">▼</span>
      </div>
    </div>
  );
};

export default SearchBar;
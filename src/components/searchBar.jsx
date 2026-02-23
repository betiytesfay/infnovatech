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
    <div className="filters-container">
      <div className="filter-box search-box">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="filter-box dropdown-box">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          <option value="">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Design">Design</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Security">Security</option>
          <option value="Blockchain">Blockchain</option>
        </select>
        <span className="dropdown-arrow">▼</span>
      </div>

      <div className="filter-box dropdown-box">
        <select
          value={level}
          onChange={handleLevelChange}
          className="filter-select"
        >
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <span className="dropdown-arrow">▼</span>
      </div>
    </div>
  );
};

export default SearchBar;
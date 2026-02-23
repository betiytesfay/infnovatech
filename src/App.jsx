import React, { useState } from 'react';
import Header from './components/header';
import SearchBar from './components/searchBar';
import CourseGrid from './components/courseGrid';
import Footer from './components/footer';
import { courses } from './data/courses';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app">
      <main className="container">
        <Header />
        <SearchBar onSearch={setSearchTerm} />
        <CourseGrid courses={courses} searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
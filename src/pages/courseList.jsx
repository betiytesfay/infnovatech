import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import CourseGrid from '../components/courseGrid';
import Footer from '../components/footer';
import { courses } from '../data/courses';
import './courseList.css';

const CoursesListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="courses-list-page">
      <main className="container">
        <Header />
        <SearchBar onSearch={setSearchTerm} />
        <CourseGrid courses={courses} searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
};

export default CoursesListPage;
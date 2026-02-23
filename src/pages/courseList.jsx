import React, { useState } from 'react';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import CourseGrid from '../components/courseGrid';
import Footer from '../components/footer';
import { courses } from '../data/courses';
import './courseList.css';

const CoursesListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  // Filter courses based on search, category, and level
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="courses-list-page">
      <main className="container">
        <Header />
        <div className="header-content">
          <div className="header-inner">
            <h1>Explore Our Courses</h1>
            <p>
              Master new skills with expert-led courses designed for the modern learner.
              Start your learning journey today with INFNOVA Academy.
            </p>
          </div>
        </div>

        <SearchBar
          onSearch={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onLevelChange={setSelectedLevel}
        />

        <CourseGrid courses={filteredCourses} searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
};

export default CoursesListPage;
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import CourseGrid from '../components/courseGrid';
import Footer from '../components/footer';
import { fetchAllCourses } from '../service/courseApi';
import './courseList.css';

const CoursesListPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  // Fetch courses from API 
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCourses();
        setCourses(data);
        setError(null);
      } catch (err) {
        setError('Failed to load courses. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  // Filter courses based on search, category, and level
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  if (loading) {
    return (
      <div className="courses-list-page">
        <main className="container">
          <Header />
          <div className="loading-spinner">Loading courses...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="courses-list-page">
        <main className="container">
          <Header />
          <div className="error-message">{error}</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="courses-list-page">
      <main className="container">
        <Header />
        <div className="header-content">
          <h1>Explore Our Courses</h1>
          <p>Master new skills with expert-led courses designed for the modern learner. Start your learning journey today with INFNOVA Academy.</p>
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
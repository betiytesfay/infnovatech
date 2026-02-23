import React from 'react';
import CourseCard from './courseCard';
import './courseGrid.css';

const CourseGrid = ({ courses, searchTerm }) => {
  return (
    <div className="course-grid-container">
      <div className="course-count">
        Showing {courses.length} of 8 courses
      </div>
      <div className="courses-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
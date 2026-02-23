import React from 'react';
import CourseCard from './courseCard';
import './courseGrid.css';

const CourseGrid = ({ courses, searchTerm }) => {
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="course-grid-container">
      <div className="course-count">
        Showing {filteredCourses.length} of {courses.length} courses
      </div>
      <div className="courses-grid">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
import React from 'react';
import { Link } from 'react-router-dom';
import './courseCard.css';

const CourseCard = ({ course }) => {
  if (!course) return null;

  // Function to get image based on category
  const getImageSrc = (category) => {
    const images = {
      'WEB DEVELOPMENT': '../src/assets/Image (Full Stack Web Development Bootcamp).png',
      'DATA SCIENCE': '../src/assets/Image (Data Analytics with Python).png',
      'DESIGN': '../src/assets/UX Design for Modern Products).png',
      'CLOUD ENGINEERING': '../src/assets/Image (Cloud Engineering with AWS).png',
      'DATA ANALYTICS': '../src/assets/Image (Data Analytics with Python).png',
      'BLOCKCHAIN': '../src/assets/Image (Blockchain & Fintech Systems).png',
      'MOBILEAPP': '../src/assets/Image (Mobile App Development with Flutter).png',
      'CYBERSECURITY': '../src/assets/Image (Cybersecurity Foundations).png'
    };
    return images[category] || '/images/default-course.jpg';
  };

  return (
    <Link to={`/course/${course.id}`} className="course-card-link">
      <div className="course-card">

        <div className="course-image-container">
          <img
            src={getImageSrc(course.category)}
            alt={course.title}
            className="course-image"
          />
          <span className="course-level">{course.level}</span>
        </div>

        {/* Content */}
        <div className="course-content">
          <div className="course-category">{course.category}</div>
          <h3 className="course-title">{course.title}</h3>
          <div className="course-instructor">Instructor: {course.instructor.name}</div>
          <div className="course-meta">
            <div className="course-duration-view">
              <span>⏱️ {course.duration}</span>
              <span>🎥 {course.students}</span>
            </div>
            <div className="course-rating">
              <span className="stars">⭐</span> {course.rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
import React from 'react';
import { Link } from 'react-router-dom';
import './courseCard.css';

const CourseCard = ({ course }) => {
  if (!course) return null;

  // Function to get image based on category
  const getImageSrc = (category) => {
    const images = {
      'DATA SCIENCE': '/images/data-science.jpg',
      'WEB DEVELOPMENT': '/images/web-dev.jpg',
      'DESIGN': '/images/design.jpg',
      'CLOUD ENGINEERING': '/images/cloud.jpg',
      'DATA ANALYTICS': '/images/data-analytics.jpg',
      'BLOCKCHAIN': '/images/blockchain.jpg',
      'DEVOPS': '/images/devops.jpg',
      'CYBERSECURITY': '/images/security.jpg'
    };
    return images[category] || '/images/default-course.jpg';
  };

  return (
    <Link to={`/course/${course.id}`} className="course-card-link">
      <div className="course-card">
        {/* Image Container with BEGINNER badge */}
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
import React from 'react';
import { Link } from 'react-router-dom';
import './courseCard.css';

const CourseCard = ({ course }) => {
  if (!course) return null;

  return (
    <Link to={`/course/${course.id}`} className="course-card-link">
      <div className="course-card">
        <div className="course-image-container">
          <img
            src={course.thumbnail}  // Use thumbnail from API
            alt={course.title}
            className="course-image"
            onError={(e) => {
              // Fallback if image fails to load
              e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80';
            }}
          />
          <span className="course-level">{course.level}</span>
        </div>

        <div className="course-content">
          <div className="course-category">{course.category}</div>
          <h3 className="course-title">{course.title}</h3>
          <div className="course-instructor">
            Instructor: {course.instructor}
          </div>
          <div className="course-meta">
            <span>⏱️ {course.duration}</span>
            <span>🎥 {course.enrolled}</span>
          </div>
          <div className="course-rating">
            <span className="stars">⭐</span> {course.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
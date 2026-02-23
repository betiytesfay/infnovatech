import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/footer';
import { fetchCourseById } from '../service/courseApi';
import './courseDetail.css';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        setLoading(true);
        const data = await fetchCourseById(id);
        setCourse(data);
        setError(null);
      } catch (err) {
        setError('Failed to load course details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [id]);

  if (loading) return <div className="loading-spinner">Loading course details...</div>;
  if (error || !course) return <div className="error-message">{error || 'Course not found'}</div>;

  return (
    <div className="course-detail-page">
      <main className="container">
        <Link to="/" className="back-button">← Back to Courses</Link>

        {/* Course Header with Image */}
        <div className="detail-header">
          <div className="course-image-large">
            <img src={course.thumbnail} alt={course.title} />
          </div>
          <div className="course-category">{course.category}</div>
          <h1>{course.title}</h1>
          <p className="course-description">{course.description || course.title}</p>
        </div>

        {/* Course Stats */}
        <div className="course-stats">
          <div className="stat-item">
            <span className="stat-label">Instructor</span>
            <span className="stat-value">{course.instructor}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Duration</span>
            <span className="stat-value">{course.duration}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Students</span>
            <span className="stat-value">{course.enrolled} enrolled</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Rating</span>
            <span className="stat-value">⭐ {course.rating}</span>
          </div>
        </div>

        {/* What You'll Learn - You might need to add this to your API or use placeholder */}
        <section className="what-you-learn">
          <h2>What You'll Learn</h2>
          <div className="learn-grid">
            <div className="learn-item">✓ Course content coming soon</div>
          </div>
        </section>

        {/* Enrollment Section */}
        <section className="enrollment-section">
          <div className="enrollment-card">
            <h3>Enroll Today</h3>
            <p className="enrollment-count">Join {course.enrolled} students already enrolled</p>
            <div className="enrollment-buttons">
              <button className="enroll-btn">Enroll Now</button>
              <button className="add-btn">Add to Wishlist</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
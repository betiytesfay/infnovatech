import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import InstructorCard from '../components/instructorCard';
import Footer from '../components/footer';
import './courseDetail.css';

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail-page">
      <main className="container">
        {/* Back Button */}
        <Link to="/" className="back-button">
          ← Back to Courses
        </Link>

        {/* Course Header */}
        <div className="detail-header">
          <div className="course-category">{course.category}</div>
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>
        </div>

        {/* Course Stats */}
        <div className="course-stats">
          <div className="stat-item">
            <span className="stat-label">Instructor</span>
            <span className="stat-value">{course.instructor.name}</span>
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

        {/* What You'll Learn */}
        <section className="what-you-learn">
          <h2>What You'll Learn</h2>
          <div className="learn-grid">
            {course.whatYoullLearn.map((item, index) => (
              <div key={index} className="learn-item">
                <span className="checkmark">✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Course Description */}
        <section className="course-description-section">
          <h2>Course Description</h2>
          <p className="long-description">{course.longDescription}</p>
          <p className="second-paragraph">
            This comprehensive course is designed to provide you with practical, hands-on experience and real-world skills.
            You'll work on projects that simulate actual industry scenarios, giving you the confidence to apply your knowledge immediately.
          </p>
        </section>

        {/* Instructor Section */}
        <section className="instructor-section">
          <h2>Your Instructor</h2>
          <InstructorCard instructor={course.instructor} />
        </section>

        {/* Enrollment Section */}
        <section className="enrollment-section">
          <div className="enrollment-card">
            <h3>Enroll Today</h3>
            <p className="enrollment-count">Join {course.enrolled} students already enrolled</p>
            <div className="enrollment-buttons">
              <button className="btn btn-primary">Enroll Now</button>
              <button className="btn btn-secondary">Add to Wishlist</button>
            </div>
            <p className="course-includes">
              <strong>This course includes:</strong> {course.duration} of content
            </p>
          </div>
        </section>

        {/* Academy Section */}
        <section className="academy-section">
          <h3>INFNOVA Academy</h3>
          <p>Empowering learners worldwide with cutting-edge technology courses. Start your journey to success with expert-led training.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import InstructorCard from '../components/instructorCard';
import Footer from '../components/footer';
import './courseDetail.css';
import Header from '../components/header';
const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail-page">
      <Header />
      <Link to="/" className="back-button">
        <p className="color-black"> ← Back to Courses</p>
      </Link>
      <main className="container">

        {/* Course Header */}
        <div className="detail-header">

          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>
          <div className="hero-stats">
            <span>👨Instructor: {course.instructor.name}</span>
            <span>⏱ {course.duration}</span>
            <span>👥 {course.enrolled} enrolled</span>
            <span>⭐ {course.rating}</span>
          </div>
          <div className="hero-image">
            <img src={course.image} alt={course.title} />
          </div>
        </div>

        {/* Course Stats */}
        <div className="course-layout">
          {/* LEFT */}
          <div className="course-main">
            <section className="what-you-learn card">
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

            <section className="course-description-section card">
              <h2>Course Description</h2>
              <p className="long-description">{course.longDescription}</p>
              <p className="second-paragraph">
                This comprehensive course is designed to provide you with practical,
                hands-on experience and real-world skills.
              </p>
            </section>

            <section className="instructor-section card">
              <h2>Your Instructor</h2>
              <InstructorCard instructor={course.instructor} />
            </section>
          </div>

          {/* RIGHT */}
          <aside className="course-sidebar">
            <div className="enrollment-card">
              <h3>Enroll Today</h3>
              <p className="enrollment-count">
                Join {course.enrolled} students already enrolled
              </p>

              <button className="enroll-btn">Enroll Now</button>
              <button className="add-btn">Add to Wishlist</button>

              <div className="includes-list">
                <strong>This course includes:</strong>
                <ul>
                  <li><span className="checkmark">✓</span> {course.duration} of content</li>
                  <li><span className="checkmark">✓</span> Certificate of completion</li>
                  <li><span className="checkmark">✓</span>Access on mobile & desktop</li>
                  <li><span className="checkmark">✓</span> Downloadable resources</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;
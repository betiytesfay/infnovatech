import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import InstructorCard from '../components/instructorCard';
import Footer from '../components/footer';
import Header from '../components/header';
import { fetchCourseById } from '../service/courseApi';
import './courseDetail.css';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const data = await fetchCourseById(id);
        setCourse(data);
      } catch (error) {
        console.error('Error loading course:', error);
      } finally {
        setLoading(false);
      }
    };
    loadCourse();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!course) return <div>Course not found</div>;

  return (
    <div className="course-detail-page">
      <Header />
      <Link to="/" className="back-button">
        <p> ← Back to Courses</p>
      </Link>
      <main className="container">

        <div className="detail-header">
          <div className="header-flex">

            <div className="header-left">
              <div className="course-category">{course.category}</div>
              <h1>{course.title}</h1>
              <p className="course-description">{course.description || course.title}</p>
              <div className="hero-stats">
                <span> Instructor: {course.instructor}</span>
                <span>⏱ {course.duration}</span>
                <span>👥 {course.enrolled} enrolled</span>
                <span>⭐ {course.rating}</span>
              </div>
            </div>

            <div className="header-right">
              <div className="hero-image">
                <img src={course.thumbnail} alt={course.title} />
              </div>
            </div>
          </div>
        </div>


        <div className="course-layout">

          <div className="course-main">
            <section className="what-you-learn card">
              <h2>What You'll Learn</h2>
              <div className="learn-grid">

                {['Course content coming soon'].map((item, index) => (
                  <div key={index} className="learn-item">
                    <span className="checkmark">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="course-description-section card">
              <h2>Course Description</h2>
              <p className="long-description">{course.description || 'Comprehensive course designed to provide practical, hands-on experience.'}</p>
              <p className="second-paragraph">
                This comprehensive course is designed to provide you with practical,
                hands-on experience and real-world skills.
              </p>
            </section>

            <section className="instructor-section card">
              <h2>Your Instructor</h2>

              <div className="instructor-card">
                <div className="instructor-avatar">
                  {course.instructor?.charAt(0) || 'I'}
                </div>
                <div className="instructor-info">
                  <h3>{course.instructor}</h3>
                  <p className="instructor-bio">
                    Expert instructor with years of industry experience.
                  </p>
                </div>
              </div>
            </section>
          </div>


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
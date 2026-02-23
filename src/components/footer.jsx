import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* INFNOVA Academy Section */}
        <div className="footer-section academy-section">
          <h3>INFNOVA Academy</h3>
          <p>Empowering learners worldwide with cutting-edge technology courses. Start your journey to success with expert-led training.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Instructors</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        © 2026 INFNOVA Technologies. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
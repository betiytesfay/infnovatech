import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section academy-section">
          <h3 className="color-white">INFNOVA Academy</h3>
          <p>Empowering learners worldwide with cutting-edge technology courses. Start your journey to success with expert-led training.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/">Courses</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        © 2026 INFNOVA Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
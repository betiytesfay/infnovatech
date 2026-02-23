import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img src="../assets/Logo.png" alt="INFNOVA Academy" />
          </Link>
        </div>
        <nav className="navbar">

          <ul className="nav-links">
            <li><Link to="/">Courses</Link></li>
            <li><Link to="/about">About </Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <button className="login-btn">Sign In</button>
          <button className="signup-btn">Enroll Now</button>
        </div>
      </div>
      <div className="header-content">
        <h1>Explore Our Courses</h1>
        <p>Master new skills with expert-led courses designed for the modern learner. Start your learning journey today with INFNOVA Academy.</p>
      </div>
    </header>
  )
}

export default Header
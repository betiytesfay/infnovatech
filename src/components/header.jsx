import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../assets/Logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="INFNOVA Academy" />
          </Link>
        </div>
        <nav className="navbar">

          <ul className="nav-links">
            <li><Link to="/">Courses</Link></li>
            <li><Link to="/about">About </Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="login-btn">Sign In</button>
          <button className="signup-btn">Enroll Now</button>
        </div>
      </div>

    </header>
  )
}

export default Header
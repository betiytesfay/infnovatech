import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import './underConstruction.css';

const UnderConstruction = ({ pageName }) => {
  return (
    <div className="page under-construction">
      <main className="container">
        <Link to="/" className="back-button">← Back to Courses</Link>

        <div className="construction-content">
          <h1>{pageName}</h1>
          <div className="construction-icon">🚧</div>
          <h2>Under Construction</h2>
          <p>This page is currently being built. Please check back later!</p>
          <Link to="/" className="home-button">Browse Courses</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnderConstruction;
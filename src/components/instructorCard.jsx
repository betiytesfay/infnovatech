import React from 'react';
import './instructorCard.css';

const InstructorCard = ({ instructor }) => {
  return (
    <div className="instructor-card">
      <div className="instructor-avatar">{instructor.initials}</div>
      <div className="instructor-info">
        <h3>{instructor.name}</h3>
        <p className="instructor-bio">{instructor.bio}</p>
        <p className="instructor-expertise">
          <strong>Expertise:</strong> {instructor.expertise}
        </p>
      </div>
    </div>
  );
};

export default InstructorCard;
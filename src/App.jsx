import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CoursesListPage from './pages/courseList';
import CourseDetailPage from './pages/courseDetail';
import AboutPage from './pages/aboutPage';
import InstructorsPage from './pages/instructorPage';
import ContactPage from './pages/contactPage';
import HelpCenterPage from './pages/helpCenterPage';
import TermsPage from './pages/termsPage';
import PrivacyPage from './pages/privacyPage';
import FAQPage from './pages/FAQPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CoursesListPage />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />

        {/* Footer Links - Add these routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/instructors" element={<InstructorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </div>
  );
}

export default App;
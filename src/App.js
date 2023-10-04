import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom

import CoursesPage from './CoursesPage';
import CourseDetailsPage from './CourseDetailsPage';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        {/* Add more routes for other components */}
      </Routes>
    </Router>
  );
}

export default App;

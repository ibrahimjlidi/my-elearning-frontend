import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom

import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './CourseDetailsPage';
import LoginForm from './pages/LoginForm';
import NavbarComponent from './NavbarComponent'; // Adjust the import path according to your project structure

import RegistrationForm from './pages/RegistrationForm';

function App() {
  return (
    <Router>
      <div>
      <NavbarComponent />
      <Routes>
        
        <Route path="/" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        {/* Add more routes for other components */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;

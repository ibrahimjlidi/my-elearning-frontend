import React, { useEffect, useState } from 'react';
import apiService from './apiService'; // Your API service for making requests
import '../css/CoursesPage.css';

function CoursesPage() {
const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch course data from Symfony backend
    apiService
      .get('/courses')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);
  return (
    <div>
      <h2 className='center'>List of Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
              <img
            src={`https://source.unsplash.com/300x300/?${course.id}/?${course.title}`} // Unsplash API with course title as query parameter
            alt={`Course ${course.id}`}
          />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {/* Add more course details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;



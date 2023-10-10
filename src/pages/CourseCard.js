
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from './apiService';

function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course details from your Symfony backend based on the ID
    const fetchCourseDetails = async () => {
      try {
        const response = await apiService.get(`/courses/${id}`);
        setCourse(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Instructor: {course.instructor}</p>
      {/* Display course content (e.g., videos, quizzes) here */}
    </div>
  );
}

export default CourseDetailsPage;

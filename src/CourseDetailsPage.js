// import React from 'react';
// import { useParams } from 'react-router-dom';

// function CourseDetailsPage() {
//   const { id } = useParams(); // Get course ID from URL parameter

//   // Fetch course details based on the course ID from an API (simulated here)
//   const courseDetails = {
//     id: 1,
//     title: 'Introduction to ReactJS',
//     description: 'Learn the basics of ReactJS.',
//     instructor: 'John Doe',
//     content: 'Course content goes here...',
//   };

//   return (
//     <div className="course-details">
//       <h1>{courseDetails.title}</h1>
//       <p>{courseDetails.description}</p>
//       <p>Instructor: {courseDetails.instructor}</p>
//       <div className="course-content">{courseDetails.content}</div>
//     </div>
//   );
// }

// export default CourseDetailsPage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from './pages/apiService';

function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course data by id
    apiService
      .get(`/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course details:', error);
      });
  }, [id]); // Include id in the dependency array to re-fetch when it changes

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Course Details</h2>
      <h3>{course.title}</h3>
      {/* Display other course details */}
    </div>
  );
}
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     // Fetch course details from your Symfony backend based on the ID
//     const fetchCourseDetails = async () => {
//       try {
//         const response = await apiService.get(`/courses/${id}`);
//         setCourse(response.data);
//       } catch (error) {
//         // Handle error
//       }
//     };

//     fetchCourseDetails();
//   }, [id]);

//   if (!course) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{course.title}</h1>
//       <p>{course.description}</p>
//       <p>Instructor: {course.instructor}</p>
//       {/* Display course content (e.g., videos, quizzes) here */}
//     </div>
//   );
// }

export default CourseDetailsPage;

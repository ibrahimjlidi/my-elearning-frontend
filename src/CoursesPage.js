// import React from 'react';
// import { Link } from 'react-router-dom';
// import CourseCard from './CourseCard';

// const coursesData = [
//   {
//     id: 1,
//     title: 'Introduction to ReactJS',
//     description: 'Learn the basics of ReactJS.',
//     instructor: 'John Doe',
//   },
//   {
//     id: 2,
//     title: 'JavaScript Fundamentals',
//     description: 'Master JavaScript from scratch.',
//     instructor: 'Jane Smith',
//   },
//   // Add more courses...
// ];

// function CoursesPage() {
//   return (
//     <div className="courses-page">
//       <h1>Available Courses</h1>
//       <div className="course-list">
//         {coursesData.map((course) => (
//           <Link to={`/courses/${course.id}`} key={course.id}>
//             <CourseCard course={course} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CoursesPage;
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard'; // Assuming you have a CourseCard component
import apiService from './apiService'; // Your API service for making requests
import './CoursesPage.css';

function CoursesPage() {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     // Fetch course data from your Symfony backend
//     const fetchCourses = async () => {
//       try {
//         const response = await apiService.get('/courses');
//         setCourses(response.data);
//         setLoading(false); // Set loading to false once data is fetched
//       } catch (error) {
//         // Handle error
//         setLoading(false); // Set loading to false in case of an error
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h1>Available Courses</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="course-list">
//           {courses.map((course) => (
//             <CourseCard key={course.id} course={course} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
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
      <h2>List of Courses</h2>
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



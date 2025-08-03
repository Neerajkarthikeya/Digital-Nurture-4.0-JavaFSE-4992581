
import React from 'react';

function CourseDetails({ courses }) {
  const showCourses = courses.length !== 0;

  return (
    <div className="mystyle1">
      <h1>Course Details</h1>
      {showCourses ? (
        courses.map((course, index) => (
          <div key={index}>
            <h2>{course.name}</h2>
            <p>{course.date}</p>
          </div>
        ))
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
}

export default CourseDetails;

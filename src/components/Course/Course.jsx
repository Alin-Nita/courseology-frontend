import "./Course.scss";
import React from "react";

const Course = (props) => {
  const { createdBy, course, originCountry } = props.course;

  return (
    <div className="course">
      <h3>{course}</h3>
      <p>Usually spoken in: {originCountry}</p>
      <p>Added by: {createdBy}</p>
    </div>
  );
};

export default Course;

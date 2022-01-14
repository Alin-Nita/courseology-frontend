import "./Course.scss";
import React from "react";

const Course = (props) => {
  const { createdBy, greeting, originCountry } = props.greeting;

  return (
    <div className="course">
      <h3>{greeting}</h3>
      <p>Usually spoken in: {originCountry}</p>
      <p>Added by: {createdBy}</p>
    </div>
  );
};

export default Course;

import "./CourseList.scss";
import Course from "../Course/Course";

const CourseList = (props) => {
  return (
    <>
      <h2 className="heading">All The Available Courses...</h2>
      <div className="container">
        {props.courses &&
          props.courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
      </div>
    </>
  );
};

export default CourseList;

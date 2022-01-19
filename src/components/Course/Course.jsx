import "./Course.scss";

const Course = (props) => {
  const {  course, courseStart, duration, free, rotationOfTeachers, online, learningOutcome } = props.course;

  return (
    <div className="course">
      <h3>{course}</h3>
      <p>Course starts in : {courseStart}</p>
      <p>Duration (weeks) : {duration}</p>
      <p>Free : {free}</p>
      <p>Rotation of teachers : {rotationOfTeachers}</p>
      <p>Held online : {online}</p>
      <p>Learning outcome : {learningOutcome}</p>
    </div>
  );
};

export default Course;

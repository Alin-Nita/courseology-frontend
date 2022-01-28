import "./Form.scss";
import { useState } from "react";

const Form = () => {
  const [course, setCourse] = useState({
    course: "",
    courseStart: "",
    duration: "",
    free: "",
    rotationOfTeachers: "",
    online: "",
    learningOutcome: "",
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    fetch("http://localhost:8080/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(course),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div className="log-form">
      <h2>Add A New Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="course"
          onInput={(e) => setCourse({ ...course, course: e.target.value })}
        />
        <input
          type="text"
          placeholder="course start"
          onInput={(e) => setCourse({ ...course, courseStart: e.target.value })}
        />

        <input
          type="number"
          placeholder="duration"
          onInput={(e) => setCourse({ ...course, duration: e.target.value })}
        />

        <input
          type="text"
          placeholder="free"
          onInput={(e) =>
            setCourse({
              ...course,
              free: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="rotation of teachers"
          onInput={(e) =>
            setCourse({
              ...course,
              rotationOfTeachers: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="held online"
          onInput={(e) =>
            setCourse({
              ...course,
              online: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="learning outcome"
          onInput={(e) =>
            setCourse({ ...course, learningOutcome: e.target.value })
          }
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

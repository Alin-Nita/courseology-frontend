import { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [course, setCourse] = useState({
    createdBy: "",
    greeting: "",
    originCountry: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/greeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    e.target.reset();
  }

  return (
    <div className="log-form">
      <h2>Add A New Course</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="your name" onInput={(e) => setCourse({ ...greeting, createdBy: e.target.value })} />
        <input type="text" placeholder="course" onInput={(e) => setCourse({ ...course, course: e.target.value })} />
        <input type="text" placeholder="origin country" onInput={(e) => setCourse({ ...course, originCountry: e.target.value })} />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
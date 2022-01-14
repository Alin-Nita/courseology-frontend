import { useState, useEffect } from "react";
import "./Dashboard.scss";
import CourseList from "../../components/CourseList/CourseListList";
import Form from "../../components/Form/Form";
import Home from "../../components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = () => {
    fetch("http://localhost:8080/courses")
      .then((res) => res.json())
      .then((json) => setCourses(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList courses={courses} />} />
        <Route path="/new-course" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;

import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/">
        Home
      </Link>

      <Link className="nav-menu__item" to="/greetings">
        Courses
      </Link>

      <Link className="nav-menu__item" to="/new-greeting">
        Add Course
      </Link>
    </div>
  );
};

export default Nav;

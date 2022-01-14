import "./Home.scss";
import React from "react";

const Home = () => {
  return (
    <div className="mainSearch">
      <form id="form" className="searchBox">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Find your next course !..."
          aria-label="Search through site content"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Home;

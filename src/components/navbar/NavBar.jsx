import React from "react";
import "./navbar.scss";
import Date from "../date/DateDropDown";

// { title, onYearChange, onQuarterChange } -- comment for now
const NavBar = ({ title, onYearChange, onQuarterChange, selectedQuarter }) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span className="nav-title">{title}</span>
        <Date
          onYearChange={onYearChange}
          onQuarterChange={onQuarterChange}
          selectedQuarter={selectedQuarter}
        />
      </div>
    </div>
  );
};

export default NavBar;

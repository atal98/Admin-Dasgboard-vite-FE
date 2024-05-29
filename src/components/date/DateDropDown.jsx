import React from "react";
import "./datedropdown.scss";
// { onYearChange, onQuarterChange }
function DateDropDown({ onYearChange, onQuarterChange, selectedQuarter }) {
  // Function to handle year selection
  const handleYearChange = (e) => {
    const year = e.target.value;
    onYearChange(year); // Pass selected year to parent component
    onQuarterChange("1"); // default pass when change to next year
  };

  // Function to handle quarter selection
  const handleQuarterChange = (e) => {
    const quarter = e.target.value;
    onQuarterChange(quarter); // Pass selected quarter to parent component
  };

  return (
    <div className="container">
      <label>Year:</label>
      <div className="year">
        <select onChange={handleYearChange}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>

      <label>Quarter:</label>
      <div className="quarter">
        <select onChange={handleQuarterChange} value={selectedQuarter}>
          <option value="1">Q1</option>
          <option value="2">Q2</option>
          <option value="3">Q3</option>
          <option value="4">Q4</option>
        </select>
      </div>
    </div>
  );
}

export default DateDropDown;

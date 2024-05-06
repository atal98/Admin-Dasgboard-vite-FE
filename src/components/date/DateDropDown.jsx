import React from "react";
import "./datedropdown.scss";
// { onYearChange, onQuarterChange }
function DateDropDown() {
  // State variables for selected year and quarter
  // const [selectedYear, setSelectedYear] = useState("2021");
  // const [selectedQuarter, setSelectedQuarter] = useState("Q1");

  // Function to handle year selection
  // const handleYearChange = (e) => {
  //   // console.log("year", e.target.value);
  //   // setSelectedYear(e.target.value);
  //   const year = e.target.value;
  //   // setSelectedYear(year);
  //   onYearChange(year); // Pass selected year to parent component
  // };

  // Function to handle quarter selection
  // const handleQuarterChange = (e) => {
  //   // console.log("quarter", e.target.value);
  //   // setSelectedQuarter(e.target.value);
  //   const quarter = e.target.value;
  //   // setSelectedQuarter(quarter);
  //   onQuarterChange(quarter); // Pass selected quarter to parent component
  // };

  return (
    <div className="container">
      <label>Year:</label>
      <div className="year">
        <select
        // onChange={handleYearChange}
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>

      <label>Quarter:</label>
      <div className="quarter">
        <select
        // onChange={handleQuarterChange}
        >
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

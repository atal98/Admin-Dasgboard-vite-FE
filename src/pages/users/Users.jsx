import React, { useState } from "react";
import "./users.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import DataTable from "../../components/datatable/DataTable";
import Cards from "../../components/card/Cards";

const Users = () => {
  // const [selectedYear, setSelectedYear] = useState("2021");
  // const [selectedQuarter, setSelectedQuarter] = useState("1");

  // const handleYearChange = (year) => {
  //   setSelectedYear(year);
  // };

  // const handleQuarterChange = (quarter) => {
  //   setSelectedQuarter(quarter);
  // };
  return (
    <div className="list">
      <div className="wrapper">
        <SideBar />
        <div className="listContainer">
          <NavBar
            title="User"
            // onYearChange={handleYearChange}
            // onQuarterChange={handleQuarterChange}
          />

          <div className="widgets">
            <Cards
              type="user"
              title="TOTAL USERS"
              symbol=""
              // section="dashboard"
              // parturl="total_user"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="retention"
              title="USER RETENTION RATE"
              symbol="%"
              // section="user"
              // parturl="total_retention_rate"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="churn"
              title="USER CHURN RATE"
              symbol="%"
              // section="user"
              // parturl="total_churn_rate"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="conversion"
              title="CONVERSION RATE"
              symbol="%"
              // section="user"
              // parturl="total_conversion_rate"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
          </div>

          <DataTable
          // year={selectedYear}
          // quarter={selectedQuarter}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;

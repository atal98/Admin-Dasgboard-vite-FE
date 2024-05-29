import React, { useState } from "react";
import "./home.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Featured from "../../components/featured/Featured";
import Revenue from "../../components/chart/Revenue";
import Widget from "../../components/widget/Widget";

const Home = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [selectedQuarter, setSelectedQuarter] = useState("1");

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleQuarterChange = (quarter) => {
    setSelectedQuarter(quarter);
  };

  return (
    <div className="home">
      <div className="wrapper">
        <SideBar />
        <div className="homeContainer">
          <NavBar
            title="Overview"
            onYearChange={handleYearChange}
            onQuarterChange={handleQuarterChange}
            selectedQuarter={selectedQuarter}
          />

          <div className="widgets">
            <Widget
              type="user"
              parturl="total_user"
              year={selectedYear}
              quarter={selectedQuarter}
            />
            <Widget
              type="order_fulfill"
              parturl="total_order_fulfill"
              year={selectedYear}
              quarter={selectedQuarter}
            />
            <Widget
              type="revenue"
              parturl="total_revenue"
              year={selectedYear}
              quarter={selectedQuarter}
            />
            <Widget
              type="profit"
              parturl="total_gross_profit"
              year={selectedYear}
              quarter={selectedQuarter}
            />
          </div>

          <div className="charts">
            <Featured year={selectedYear} quarter={selectedQuarter} />
            <Revenue
              title="LAST 6 MONTHS - REVENUE"
              year={selectedYear}
              quarter={selectedQuarter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

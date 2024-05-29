import React, { useState } from "react";
import "./stats.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Cards from "../../components/card/Cards";
import VsBarChart from "../../components/chart/VsBarChart";
import Pie from "../../components/chart/Pie";
import GrowthRatePie from "../../components/chart/GrowthRatePie";
import StackedBarChart from "../../components/chart/stackedChart";

const Stats = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [selectedQuarter, setSelectedQuarter] = useState("1");

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleQuarterChange = (quarter) => {
    setSelectedQuarter(quarter);
  };
  return (
    <div className="stat">
      <div className="wrapper">
        <SideBar />
        <div className="statContainer">
          <NavBar
            title="Stats"
            onYearChange={handleYearChange}
            onQuarterChange={handleQuarterChange}
            selectedQuarter={selectedQuarter}
          />

          <div className="widgets">
            <Cards
              type="cac"
              title="CAC"
              symbol="₹"
              section="stats"
              parturl="cac"
              year={selectedYear}
              quarter={selectedQuarter}
            />
            <Cards
              type="conversion"
              title="CONVERSION RATE"
              symbol="%"
              section="user"
              parturl="total_conversion_rate"
              year={selectedYear}
              quarter={selectedQuarter}
            />
            <Cards
              type="retention"
              title="USER RETENTION RATE"
              symbol="%"
              section="user"
              parturl="total_retention_rate"
              year={selectedYear}
              quarter={selectedQuarter}
            />
            <Cards
              type="churn"
              title="USER CHURN RATE"
              symbol="%"
              section="user"
              parturl="total_churn_rate"
              year={selectedYear}
              quarter={selectedQuarter}
            />
          </div>

          <div className="charts">
            <VsBarChart
              title="Sale Expense vs Customer Acq. vs Total Leads"
              year={selectedYear}
              quarter={selectedQuarter}
            />
            <Pie
              type="sales"
              title="Sales Expense Breakdown"
              section="stats"
              parturl="sales_breakdown"
              year={selectedYear}
              quarter={selectedQuarter}
              margin_left={90}
              outer_radius_size={100}
              cx_axis={110}
            />
            <StackedBarChart
              title="Net Profit Brekdown"
              section="stats"
              parturl="net_profit_breakdown"
              year={selectedYear}
              quarter={selectedQuarter}
            />
            <GrowthRatePie
              type="sales"
              title="Growth Rate"
              section="stats"
              parturl="growth_rate"
              year={selectedYear}
              quarter={selectedQuarter}
              margin_left={90}
              outer_radius_size={150}
              start_angle={-90}
              end_angle={90}
              cx_axis={110}
              cy_axis={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

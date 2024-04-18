import "./orders.scss";
import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
// import Widget from "../../components/widget/Widget";
import LastSixMonthsOrder from "../../components/chart/LastSixMonthsOrder";
import Pie from "../../components/chart/Pie";
import Cards from "../../components/card/Cards";

const Orders = () => {
  // const [selectedYear, setSelectedYear] = useState("2021");
  // const [selectedQuarter, setSelectedQuarter] = useState("1");

  // const handleYearChange = (year) => {
  //   setSelectedYear(year);
  // };

  // const handleQuarterChange = (quarter) => {
  //   setSelectedQuarter(quarter);
  // };
  return (
    <div className="order">
      <div className="wrapper">
        <SideBar />
        <div className="orderContainer">
          <NavBar
            title="Orders"
            // onYearChange={handleYearChange}
            // onQuarterChange={handleQuarterChange}
          />

          <div className="widgets">
            <Cards
              type="order"
              title="TOTAL ORDER"
              symbol=""
              // section="order"
              // parturl="total_order"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="order_fulfill"
              title="TOTAL ORDER FULFILL"
              symbol=""
              // section="dashboard"
              // parturl="total_order_fulfill"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="order_value"
              title="ORDER VALUE"
              symbol="₹"
              // section="order"
              // parturl="total_order_value"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="avg_order"
              title="AVG ORDER VALUE"
              symbol="₹"
              // section="order"
              // parturl="total_avg_order_value"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="return"
              title="ORDER RETURN RATE"
              symbol="%"
              // section="order"
              // parturl="total_order_return"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
          </div>

          <div className="charts">
            <LastSixMonthsOrder
              title="Last 6 Months Order Fulfill By Category"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Pie
            // year={selectedYear}
            // quarter={selectedQuarter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

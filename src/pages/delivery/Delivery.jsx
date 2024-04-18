import "./delivery.scss";
import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Cards from "../../components/card/Cards";

const Delivery = () => {
  // const [selectedYear, setSelectedYear] = useState("2021");
  // const [selectedQuarter, setSelectedQuarter] = useState("1");

  // const handleYearChange = (year) => {
  //   setSelectedYear(year);
  // };

  // const handleQuarterChange = (quarter) => {
  //   setSelectedQuarter(quarter);
  // };
  return (
    <div className="delivery">
      <div className="wrapper">
        <SideBar />
        <div className="deliveryContainer">
          <NavBar
            title="Delivery"
            // onYearChange={handleYearChange}
            // onQuarterChange={handleQuarterChange}
          />

          <div className="widgets">
            <Cards
              type="delivery"
              title="TOTAL DELIVERY"
              symbol=""
              // section="delivery"
              // parturl="delivery_info"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="shipped"
              title="SHIPPED"
              symbol=""
              // section="delivery"
              // parturl="delivery_info"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="intransit"
              title="INTRANSIT"
              symbol=""
              // section="delivery"
              // parturl="delivery_info"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="delivered"
              title="DELIVERED"
              symbol=""
              // section="delivery"
              // parturl="delivery_info"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
            <Cards
              type="return_delivered"
              title="RETURN DELIVERED"
              symbol=""
              // section="delivery"
              // parturl="delivery_info"
              // year={selectedYear}
              // quarter={selectedQuarter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

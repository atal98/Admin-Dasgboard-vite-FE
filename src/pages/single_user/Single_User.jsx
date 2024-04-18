import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import "./single_user.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import { useParams } from "react-router-dom";

const Users = () => {
  // const [selectedYear, setSelectedYear] = useState("2021");
  // const [selectedQuarter, setSelectedQuarter] = useState("1");

  // const handleYearChange = (year) => {
  //   setSelectedYear(year);
  // };

  // const handleQuarterChange = (quarter) => {
  //   setSelectedQuarter(quarter);
  // };

  const MyPraram = useParams();
  const MyId = MyPraram.userId;
  // const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/user/single_user/${MyId}/`);
        console.log("data", response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="singlelist">
      <div className="wrapper">
        <SideBar />
        <div className="singlelistContainer">
          <NavBar
            title="Single User"
            // onYearChange={handleYearChange}
            // onQuarterChange={handleQuarterChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;

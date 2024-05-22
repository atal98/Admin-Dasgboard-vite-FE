import "./chart.scss";
import React, { useState, useEffect } from "react";
// import axios from "../axios/Axios";
import {
  BarChart,
  Legend,
  Bar,
  CartesianGrid,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

// { title, year, quarter }
const LastSixMonthOrder = ({ title }) => {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `/api/order/last_six_months_order_fulfill/?year=${year}&quarter=${quarter}`
  //       );
  //       setData(response.data);
  //       setLoading(false);
  //       console.log("data", response.data);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [year, quarter]);

  // if (loading) {
  //   return (
  //     <Box sx={{ display: "flex" }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  let data;
  data = [
    {
      month_year: "Oct/20",
      Tech: 0,
      Sports: 0,
      Satationary: 0,
    },
    {
      month_year: "Nov/20",
      Tech: 0,
      Sports: 0,
      Satationary: 0,
    },
    {
      month_year: "Dec/20",
      Tech: 0,
      Sports: 0,
      Satationary: 0,
    },
    {
      month_year: "Jan/21",
      Tech: 14,
      Sports: 4,
      Satationary: 5,
    },
    {
      month_year: "Feb/21",
      Tech: 26,
      Sports: 10,
      Satationary: 13,
    },
    {
      month_year: "Mar/21",
      Tech: 2,
      Sports: 0,
      Satationary: 8,
    },
  ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width={855} height="80%">
        <BarChart width={730} height={250} data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="month_year" className="xAxisLabel" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          <Bar dataKey="Tech" fill="#8884d8" />
          <Bar dataKey="Sports" fill="#82ca9d" />
          <Bar dataKey="Satationary" fill="#FF000033" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LastSixMonthOrder;

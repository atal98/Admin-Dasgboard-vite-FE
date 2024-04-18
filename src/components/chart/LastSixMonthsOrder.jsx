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
      month_year: "Oct-2020",
      Tech: 0,
      Sports: 0,
      Satationary: 0,
    },
    {
      month_year: "Nov-2020",
      Tech: 0,
      Sports: 0,
      Satationary: 0,
    },
    {
      month_year: "Dec-2020",
      Tech: 0,
      Sports: 0,
      Satationary: 0,
    },
    {
      month_year: "Jan-2021",
      Tech: 14,
      Sports: 4,
      Satationary: 5,
    },
    {
      month_year: "Feb-2021",
      Tech: 26,
      Sports: 10,
      Satationary: 13,
    },
    {
      month_year: "Mar-2021",
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
          <XAxis dataKey="month_year" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="Tech" fill="#8884d8" />
          <Bar dataKey="Sports" fill="#82ca9d" />
          <Bar dataKey="Satationary" fill="#FF000033" />
        </BarChart>
        {/* <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 50, bottom: 0 }}
        >
          <defs>
            <linearGradient id="coloruv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="coloramt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF000033" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF000033" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month_year" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="Tech"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#coloruv)"
          />
          <Area
            type="monotone"
            dataKey="Sports"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <Area
            type="monotone"
            dataKey="Satationary"
            stroke="#ff7f0e"
            fillOpacity={1}
            fill="url(#coloramt)"
          />
        </AreaChart> */}
      </ResponsiveContainer>
    </div>
  );
};

export default LastSixMonthOrder;

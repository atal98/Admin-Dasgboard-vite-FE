import "./chart.scss";
import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import api from "../../api";

// { title, year, quarter }
const Revenue = ({ title, year, quarter }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          `/api/dashboard/last_six_months_revenue/?year=${year}&quarter=${quarter}`
        );
        setData(response.data);
        setLoading(false);
        console.log("revenue data", response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [year, quarter]);

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // let data;

  // data = [
  //   {
  //     month_year: "Oct/20",
  //     total_revenue: 0,
  //   },
  //   {
  //     month_year: "Nov/20",
  //     total_revenue: 0,
  //   },
  //   {
  //     month_year: "Dec/20",
  //     total_revenue: 0,
  //   },
  //   {
  //     month_year: "Jan/21",
  //     total_revenue: 19903.53,
  //   },
  //   {
  //     month_year: "Feb/21",
  //     total_revenue: 36064.34,
  //   },
  //   {
  //     month_year: "Mar/21",
  //     total_revenue: 4354.61,
  //   },
  // ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width={955} height="80%">
        <AreaChart data={data} margin={{ top: 20, right: 60 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month_year" stroke="gray" className="xAxisLabel" />
          <YAxis className="yAxisLabel rev-yAxisLabel" />
          {/* <CartesianGrid strokeDasharray="3 3" className="chartGrid" /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total_revenue"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Revenue;
